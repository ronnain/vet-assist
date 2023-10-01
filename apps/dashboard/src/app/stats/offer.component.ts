import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core/api.service';
import { from, map } from 'rxjs';
import { NbProspectByOfferPipe } from './nb-prospect-by-offer.pipe';

@Component({
  selector: 'pd-offer',
  standalone: true,
  imports: [CommonModule, NbProspectByOfferPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<section *ngIf="prospects$ | async as prospects" class="pt-8">
  <h1 class="text-3xl font-semibold pl-8">Prospects : {{ prospects.length }}</h1>
  <div class="space-y-8">
    <div
      *ngFor="let nbProspectsByOffer of prospects | pdNbProspectByOffer"
      class="mt-8 ml-8 p-8 w-fit border rounded-sm bg-sky-100  "
      >
      <ul class="text-xl">
        <li >
          <p>{{nbProspectsByOffer.offerName}} <strong class="text-accent pl-2">{{nbProspectsByOffer.total}}</strong></p>
          <em class="text-sm">{{nbProspectsByOffer.description}}</em>
        </li>
      </ul>

    </div>
  </div>


  <div class="flex flex-col pt-8 ">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light bg-sky-100">
            <thead
              class="border-b bg-sky-500 text-primary-foreground font-medium dark:border-neutral-500 dark:bg-neutral-900">
              <tr>
                <th scope="col" class=" px-6 py-4">#</th>
                <th scope="col" class=" px-6 py-4">Email</th>
                <th scope="col" class=" px-6 py-4">Offer</th>
                <th scope="col" class=" px-6 py-4">Créé à</th>
                <th scope="col" class=" px-6 py-4">Problème</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-b dark:border-neutral-500"
                *ngFor="let prospect of prospects; let index = index; trackBy: trackByFn"
                >
                <td class="whitespace-nowrap  px-6 py-4 font-medium">{{index}}</td>
                <td class="whitespace-nowrap  px-6 py-4">{{prospect.email}}</td>
                <td class="whitespace-nowrap  px-6 py-4">{{prospect.offerName}}</td>
                <td class="whitespace-nowrap  px-6 py-4">{{prospect.createdAt}}</td>
                <td class="whitespace-nowrap  px-6 py-4">{{prospect.problem ?? '-'}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [
  ]
})
export default class OfferComponent {
  apiService = inject(ApiService);

  prospects$ = from(this.apiService.client.prospect.prospects()).pipe(
    map(data => {
      if(data.status === 200) {
        return data.body;
      }
      return null;
    }
  )
  );

  trackByFn(index: number) {
    return index;
  }
}