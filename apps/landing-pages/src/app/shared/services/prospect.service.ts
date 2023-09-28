import { Injectable } from '@angular/core';
import { ClientInferResponseBody } from '@ts-rest/core';
import { ProspectContract } from '@vet-assist/landing-pages-api-contract';
import { ReplaySubject } from 'rxjs';

export type ProspectCreated = ClientInferResponseBody<typeof ProspectContract.storeEmailProspect>;

@Injectable({providedIn: 'root'})
export class ProspectService {

    prospect$ = new ReplaySubject<ProspectCreated>(1);

}