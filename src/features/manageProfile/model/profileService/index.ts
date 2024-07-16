import { ProfileService, ProfileAuthOutput as ProfileAuthOutputRx } from './ProfileService';
import { ProfileServiceInMemory } from './inMemory/ProfileServiceInMemory';
import { ProfileServiceRest } from 'src/features/manageProfile/model/profileService/rest/ProfileServiceRest';

export const profileService: ProfileService = process.env.REACT_APP_USE_IN_MEMORY_SERVICES
  ? new ProfileServiceInMemory()
  : new ProfileServiceRest(process.env.REACT_APP_SERVER_URL);

export type ProfileAuthOutput = ProfileAuthOutputRx;
