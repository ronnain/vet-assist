import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { ClientInferRequest } from '@ts-rest/core';
import { ProspectContract } from '@vet-assist/landing-pages-api-contract';
import { from, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailStorageService {

    private readonly apiService = inject(ApiService);

    store(body: ClientInferRequest<typeof ProspectContract.storeEmailProspect>['body']) {
        return from(this.apiService.client.prospect.storeEmailProspect({body})).pipe(map(data => {
            if(data.status === 200) {
                return data.body;
            }
            return null;
        } ));
    }

}