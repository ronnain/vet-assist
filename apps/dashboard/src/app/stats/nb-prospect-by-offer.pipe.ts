import { Pipe, PipeTransform } from '@angular/core';
import { Prospect } from '@prisma/client';

@Pipe({
    name: 'pdNbProspectByOffer',
    standalone: true
})
export class NbProspectByOfferPipe implements PipeTransform {
    transform(prospects: Prospect[]) {

        return prospects.reduce((acc, cur) => {
            const nbProspectByOffer = acc.find(nbProspectByOffer => nbProspectByOffer.offerName === cur.offerName);
            if(!nbProspectByOffer) {
                acc.push({offerName: cur.offerName, description: cur.offerDescription, total: 1});
                return acc;
            }
            nbProspectByOffer.total++;
            return acc;
        }, [] as {offerName: Prospect['offerName'], description: Prospect['offerDescription'], total: number}[])

    }
}