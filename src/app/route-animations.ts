import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition(':increment', slideTo('right')),
    transition(':decrement', slideTo('left'))
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ], optional),
    group([
      query(':leave', [
        animate('800ms ease-out', style({ [direction]: '115%' }))
      ], optional),
      query(':enter', [
        animate('800ms ease-out', style({ [direction]: '0%' }))
      ], optional)
    ]),
    query(':enter', animateChild(), optional),
  ];
}
