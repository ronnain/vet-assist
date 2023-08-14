import { Component, inject } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
    selector: 'va-chat',
    providers: [ChatService],
    standalone: true,
    template: `
    ChatService
    `
})
export default class ChatComponent {

    private readonly chatService = inject(ChatService)

    ngOnInit() {
        this.chatService.getMessage().subscribe((message: string) => { // TODO unsub
            console.log(message);
        });
        this.chatService.sendMessage('Hello World Chat');
    }
}