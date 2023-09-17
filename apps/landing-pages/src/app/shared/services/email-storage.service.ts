import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailStorageService {

    constructor(private httpClient: HttpClient) {
    }
    store(email: string) {
        return of(true).pipe(delay(3000));
    }

}