import { Injectable } from '@angular/core';
import { initClient } from '@ts-rest/core';
import { RootContract } from '@vet-assist/landing-pages-api-contract';

@Injectable({providedIn: 'root'})
export class ApiService {

    readonly client = initClient(RootContract, {
        baseUrl: 'http://localhost:3001',
        baseHeaders: {},
    });
}