import { Injectable, inject } from '@angular/core';
import { delay, from, of } from 'rxjs';
import { ApiService } from '../../core/api.service';
import { ProspectCreated } from './prospect.service';

@Injectable({providedIn: 'root'})
export class ProblemStorageService {

    private readonly apiService = inject(ApiService);

    store(prospect: {problem: string, prospect: ProspectCreated}) {
        return from(this.apiService.client.prospect.patchProspect(
            {
                params: {
                    prospectId: prospect.prospect.id.toString()
                },
                body: {
                    problem: prospect.problem
                }
            }
        ));
    }

}