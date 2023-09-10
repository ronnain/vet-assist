import { Component, inject } from '@angular/core';
import { ChatWebSocketService } from './chat-web-socket.service';
import { ChatService } from './chat.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'va-chat',
    providers: [ChatWebSocketService],
    standalone: true,
    imports: [CommonModule],
    template: `
    ChatService
    conversations$ <pre>{{ conversations$ | async | json }}</pre>
    `
})
export default class ChatComponent {

    private readonly chatSocketService = inject(ChatWebSocketService);

    private readonly chatService = inject(ChatService);

    conversations$ = this.chatService.chatService.conversations();

    ngOnInit() {
        this.chatSocketService.getMessage().subscribe((message: string) => { // TODO unsub
            console.log(message);
        });
        this.chatSocketService.sendMessage('Hello World Chat');
    }
}