import { ProfileAuthOutput as ProfileAuthOutputRx, ProfileService as ProfileServiceRx } from './ProfileService';

export type ProfileAuthOutput = ProfileAuthOutputRx;
export type ProfileService = ProfileServiceRx;
export { ProfileServiceRest } from './rest/ProfileServiceRest';
export { ProfileServiceInMemory } from './inMemory/ProfileServiceInMemory';
