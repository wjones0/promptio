import { AuthEffects } from './auth.effect';
import { RouterEffects } from './router.effect';

export const effects: any[] = [
    AuthEffects,
    RouterEffects
];

export * from './auth.effect';
export * from './router.effect';
