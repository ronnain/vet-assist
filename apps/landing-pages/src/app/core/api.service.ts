import { Injectable } from '@angular/core';
import { initClient } from '@ts-rest/core';
import { RootContract } from '@vet-assist/landing-pages-api-contract';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ApiService {

    readonly client = initClient(RootContract, environment.api);
}