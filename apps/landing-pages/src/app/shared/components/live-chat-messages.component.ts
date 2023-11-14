import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, inject } from '@angular/core';
import { Observable, combineLatest, concatMap, delay, filter, from, map, of, shareReplay, startWith, switchMap, tap, toArray } from 'rxjs';
import { z } from 'zod';
import { InputState } from '../utile/input-state-decorator';

const MessageTypeEnumSchema = z.enum(['TEXT','IMAGE_URL','VIDEO_URL','AUDIO_URL','DOCUMENT_URL']);

export const MessageSchema = z.object({
    type: MessageTypeEnumSchema,
    id: z.number().int(),
    storedAt: z.coerce.date(),
    content: z.string(),
    /**
     * If the message is a media, we store the extension
     */
    mediaExtension: z.string().nullable(),
    authorId: z.number().int(),
    channelId: z.number().int(),
  });


@Component({
    selector: 'lp-live-chat-messages',
    standalone: true,
    imports: [
        CommonModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    .mediaHour {
        background: linear-gradient(0deg, rgb(0 0 0 / 48%) 0%, rgb(0 0 0 / 20%) 67%, rgba(0,0,0,0) 100%);
    }
    `],
    template: `
    <ng-container *ngIf="vm$ | async as vm">
        <div class="flex flex-col gap-y-3 mx-2">
            <ng-container *ngFor="let message of vm.list">
                <!-- TODO ADD IMG ONLY FOR STAFF -->
                <ng-container [ngSwitch]="message.type">

                    <ng-container *ngSwitchCase="'DaySeparator'">
                        <p class="!m-auto text-xxs text-neutral-400">{{message.date | date : 'EEEE dd MMMM'}}</p>
                    </ng-container>

                    <ng-container *ngSwitchCase="'TEXT'">
                        <div
                          class="rounded-md p-1 w-fit shadow-md"
                          [ngClass]="[
                            message.isFromCurrentUser ? 'self-end bg-primary text-primary-foreground ml-8' : 'self-start bg-primary-shade-50 text-primary-shade-900 mr-8',
                            ]"
                        >

                            <div class="flex flex-row space-x-2">
                                <div class="flex-1">
                                    <span class="whitespace-pre-line text-xs">{{message.content}}</span>
                                </div>
                            </div>

                        </div>
                    </ng-container>

                    <ng-container *ngSwitchCase="'IMAGE_URL'">
                        <div
                          class="rounded-md p-1 w-fit shadow-md"
                          [ngClass]="[
                            message.isFromCurrentUser ? 'self-end bg-primary text-primary-foreground ml-8' : 'self-start bg-primary-shade-50 text-primary-shade-900 mr-8',
                            ]"
                        >
                        <div
                          class="relative"
                           >
                            <img
                                [src]="message.content"
                                [class]="'max-w-xxs md:max-w-lg max-h-64 bg-white relative'"
                            />
                            <!-- <div class="absolute bottom-0 w-full flex justify-end mediaHour">
                                <span class="text-xxs">{{ message.storedAt | date : 'H:mm' }}</span>
                            </div> -->
                        </div>

                        </div>
                    </ng-container>
                </ng-container>

            </ng-container>
        </div>

    </ng-container>
    `
})
export default class LiveChatMessagesComponent {

TRANSLATIONS = {
    'MediaContextMenuDownload': 'Télécharger',
};

@InputState() private readonly inputState$!: Observable<{messages: LiveChatMessagesComponent['messages'], currentAccountId: LiveChatMessagesComponent['currentAccountId'] }>;

@Input({required: true}) messages!: z.infer<typeof MessageSchema>[];
@Input({required: true}) currentAccountId!: number;

  // TODO SUB WHEN A NEW MESSAGE IS SEND FROM HERE AND SUB TO THE NEW MESSAGE FROM THE SERVER
  private fetchMessages$ = this.inputState$.pipe(
        switchMap((inputState) => from(inputState.messages).pipe(
            toArray(),
            map((messages) => ({messages, inputState})),
            )),
        map((data) => {
            return {
                hasError: false,
                isLoaded: true,
                list: data.messages,
                inputState: data.inputState
            };
        }),
  );

  vm$ = combineLatest({
    inputState : this.inputState$,
    fetchMessages: this.fetchMessages$,
  }).pipe(
    map(({inputState, fetchMessages,}) => {
        // console.log('fetchMessages', fetchMessages);
        const list = [...fetchMessages.list]
                        .map((message) => ({...message, isFromCurrentUser: message?.authorId === inputState?.currentAccountId}))
                        .reduce((acc, message, currentIndex, list) => {
                            // Add intermediate message if the message are on different days
                            const previousMessage= list[currentIndex - 1];
                            const previousMessageDay = previousMessage ? new Date(previousMessage.storedAt).getDate() : -1;
                            const currentMessageDay = new Date(message.storedAt).getDate();
                            if (previousMessageDay !== currentMessageDay) {
                                acc.push({type: 'DaySeparator', date: new Date(message.storedAt)});
                            }
                            acc.push(message);
                            return acc;
                        }, [] as (z.infer<typeof MessageSchema> | {type: 'DaySeparator', date: Date})[]);
        return {
            ...fetchMessages,
            list, // TODO CHECK IF THE MESSAGE IS NOT ALREADY IN THE LIST AND CHECK IF THE MESSAGE IS FOR THE CURRENT CHANNEL AND IF THE PAGINATION IS NOT AT THE END
            inputState,
            isLoading: inputState != fetchMessages.inputState
        }
    }),
    startWith({
        hasError: false,
        isLoading: true,
        isLoaded: false,
        list: [],
        inputState: {
            channelId: -1,
            currentAccountId: -1
        }
    }),
    tap(console.log),
    shareReplay(1)
  );

  protected async onDownloadMedia(mediaId: number, channelId: number, mediaExtension: string) {
    // TODO CHECK IF WORKING ON MOBILE
    const filename = 'http://localhost:3000/'+ 'channel-' + channelId+ '/' + mediaId + '-original.' + mediaExtension; // Spécifiez le nom du fichier à télécharger

    try {
      const response = await fetch(`${filename}`);

      if (!response.ok) {
        throw new Error('Le téléchargement a échoué');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = mediaId + '-original.' + mediaExtension;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  }


  @Output() messagesLoaded = this.vm$.pipe( // todo wait img to be loaded or error too
    map((vm) => vm.isLoaded),
    filter((isLoaded) => isLoaded),
    );
}