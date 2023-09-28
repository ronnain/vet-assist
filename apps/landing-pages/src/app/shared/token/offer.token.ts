import { InjectionToken } from "@angular/core";

export const OFFER_TOKEN = new InjectionToken<{
    offerName: string,
    offerDescription: string
  }>('offer name and description');

export function provideOfferToken(offer: {
    offerName: string,
    offerDescription: string
  }) {
  return {
    provide: OFFER_TOKEN,
    useValue: offer
  };
}