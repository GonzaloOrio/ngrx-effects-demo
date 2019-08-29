export * from './users.effects';
export * from './user.effects';

import { UsersEffects } from './users.effects';
import { UserEffects } from './user.effects';

export const effectsArray: any[] = [UsersEffects, UserEffects];
