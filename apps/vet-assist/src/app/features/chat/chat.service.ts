import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Injectable({providedIn: 'root'})
export class ChatService {
    public readonly chatService = inject(ApiService).client.conversations;
}