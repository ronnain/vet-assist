import { InjectionToken } from "@angular/core";

export const OFFERS = {
  1: {
    1: {
      offerName: 'offer 1 - 9.90€',
      offerDescription: 'Jour uniquement de 7 à 22h',
      availability: 'Accès au chat tous les jours de 7h à 22h ',
      price: "9.90"
    },
    2: {
      offerName: 'offer 1 - 11.90€',
      offerDescription: 'Jour uniquement de 7 à 22h',
      availability: 'Accès au chat tous les jours de 7h à 22h ',
      price: "11.90"
    },
    3: {
      offerName: 'offer 1 - 14.90€',
      offerDescription: 'Jour uniquement de 7 à 22h',
      availability: 'Accès au chat tous les jours de 7h à 22h ',
      price: "14.90"
    },
  },
  2: {
    1: {
      offerName: 'offer 2 - 9.90€',
      offerDescription: '24h/24 - 7j/7',
      availability: 'Accès au chat 24h/24 - 7j/7',
      price: "9.90"
    },
    2: {
      offerName: 'offer 2 - 11.90€',
      offerDescription: '24h/24 - 7j/7',
      availability: 'Accès au chat 24h/24 - 7j/7',
      price: "11.90"
    },
    3: {
      offerName: 'offer 2 - 14.90€',
      offerDescription: '24h/24 - 7j/7',
      availability: 'Accès au chat 24h/24 - 7j/7',
      price: "14.90"
    },
  },
  3: {
    1: {
      offerName: 'offer 3 - 9.90€',
      offerDescription: '7h à 22h + majoration de 2€ la question de 22h à 7h',
      availability: 'Accès au chat 24h/24 - 7j/7',
      extra: 'Majoration de 2€ la question de 22h à 7h',
      price: "9.90"
    },
    2: {
      offerName: 'offer 3 - 11.90€',
      offerDescription: '7h à 22h + majoration de 2€ la question de 22h à 7h',
      availability: 'Accès au chat 24h/24 - 7j/7',
      extra: 'Majoration de 2€ la question de 22h à 7h',
      price: "11.90"
    },
    3: {
      offerName: 'offer 3 - 14.90€',
      offerDescription: '7h à 22h + majoration de 2€ la question de 22h à 7h',
      availability: 'Accès au chat 24h/24 - 7j/7',
      extra: 'Majoration de 2€ la question de 22h à 7h',
      price: "14.90"
    },
  },
  4: {
    1: {
      offerName: 'offer 4 - 9.90€',
      offerDescription: 'Ne devrait pas arriver :7h à 22h + majoration de 2€ la question de 22h à 7h',
      availability: 'Accès au chat 24h/24 - 7j/7',
      extra: 'Majoration de 2€ la question de 22h à 7h',
      price: "9.90"
    },
    2: {
      offerName: 'offer 4 - 11.90€',
      offerDescription: 'Ne devrait pas arriver :7h à 22h + majoration de 2€ la question de 22h à 7h',
      availability: 'Accès au chat 24h/24 - 7j/7',
      extra: 'Majoration de 2€ la question de 22h à 7h',
      price: "11.90"
    },
    3: {
      offerName: 'offer 4 - 14.90€',
      offerDescription: 'Ne devrait pas arriver :7h à 22h + majoration de 2€ la question de 22h à 7h',
      availability: 'Accès au chat 24h/24 - 7j/7',
      extra: 'Majoration de 2€ la question de 22h à 7h',
      price: "14.90"
    }
  }
} as const;

export const OFFER_TOKEN = new InjectionToken<typeof OFFERS[keyof typeof OFFERS][keyof typeof OFFERS[keyof typeof OFFERS]]>('offer name and description');

export function provideOfferToken() {
  // const {offer, price} = inject(ActivatedRouteSnapshot).params as {offer: keyof typeof OFFERS, price: Readonly<1 | 2 | 3>};

  return {
    provide: OFFER_TOKEN,
    useValue: OFFERS[1][1]
  };
}