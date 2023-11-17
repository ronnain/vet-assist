import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, inject } from '@angular/core';
import { Subject, fromEvent, map, merge, startWith } from 'rxjs';

@Component({
    selector: 'lp-scroll-shadow',
    standalone: true,
    imports: [
    CommonModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      class: 'block relative overflow-auto scrollbar-thin  scrollbar-thumb-gray-300 scrollbar-track-gray-200'
    },
    styles: [`
      .bg-scroll-shadow-bottom {
        background-image: linear-gradient(180deg,hsla(0,0%,100%,0) 40%,hsla(0,0%,100%,0)),radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.16),transparent);
      }
      .bg-scroll-shadow-up {
        background-image: radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.13),transparent),linear-gradient(180deg,hsla(0,0%,100%,0) 40%,hsla(0,0%,100%,0));
      }
    `],
    template: `
    <ng-container *ngIf="vm$ | async as vm">
      <!-- SHADOW TOP -->
        <div
          class="sticky top-0 bg-scroll-shadow-up w-full h-4 -mb-4 transition-opacity duration-300"
          [ngClass]="[vm.top ?  'opacity-100' : 'opacity-0' ]"
        ></div>

        <ng-content/>

        <div
          class="sticky bottom-0 bg-scroll-shadow-bottom w-full h-4 -mt-4 rotate-180 transition-opacity duration-300"
          [ngClass]="[vm.bottom ?  'opacity-100' : 'opacity-0']"
        ></div>
    </ng-container>
    `
})
export default class ScrollShadowComponent implements AfterViewInit {
  // todo run outside angular

  private _elementRef = inject(ElementRef);

  @Input({'required': true}) @HostBinding('style.maxHeight') maxHeight!: `${number}px`;

  afterViewInit$ = new Subject<void>();

  protected vm$ = merge(
    fromEvent<Event>(this._elementRef.nativeElement, 'scroll'),
    this.afterViewInit$.pipe(map(() => ({target: this._elementRef.nativeElement} as Event)))
  ).pipe(
    map(event => this.getScrollPosition(event)),
    map(scrollPosition => this.detectVisibleScrollShadow(scrollPosition)),
    startWith({
      top: false,
      bottom: false
    })
  );

  ngAfterViewInit() {
    this.afterViewInit$.next();
    this.afterViewInit$.complete();
  }

  getScrollPosition(event: Event) {
    const {scrollTop, scrollHeight, clientHeight} = event.target as HTMLDivElement;
    return {scrollTop, scrollHeight, clientHeight};
  }

  detectVisibleScrollShadow({
    scrollTop,
    scrollHeight,
    clientHeight
  }: {scrollTop: number, scrollHeight: number, clientHeight: number}): { top: boolean; bottom: boolean } {
    const isBottom = clientHeight === scrollHeight - scrollTop;
    const isTop = scrollTop === 0;
    const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;

    return {
      top: (isBottom || isBetween) && !(isTop && isBottom),
      bottom: (isTop || isBetween) && !(isTop && isBottom),
    };
  }

}