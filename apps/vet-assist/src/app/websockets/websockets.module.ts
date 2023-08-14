import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgModule } from '@angular/core';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
    imports: [SocketIoModule.forRoot(config)],
    exports: [],
    declarations: [],
    providers: [],
})
export class WebSocketsModule { }
