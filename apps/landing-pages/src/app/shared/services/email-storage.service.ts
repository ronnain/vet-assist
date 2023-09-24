import { Injectable, inject } from '@angular/core';
import { delay, of } from 'rxjs';
import { ApiService } from '../../core/api.service';

@Injectable({providedIn: 'root'})
export class EmailStorageService {

    private readonly apiService = inject(ApiService);

    store(email: string) {
        // return this.apiService.client.prospect.createProspect({body: {email}});
        return of(true).pipe(delay(3000));
    }

}