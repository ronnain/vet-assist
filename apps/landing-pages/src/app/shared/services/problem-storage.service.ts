import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { ApiService } from '../../core/api.service';

@Injectable({providedIn: 'root'})
export class ProblemStorageService {

    private readonly apiService = inject(ApiService);

    constructor(private httpClient: HttpClient) {
    }
    store(problem: string) {
        console.log('storeEmail', problem);
        return of(true).pipe(delay(3000));
        // return this.httpClient.post('https://landing-pages-6b6f7-default-rtdb.europe-west1.firebasedatabase.app/emails.json', {email: email});
    }

}