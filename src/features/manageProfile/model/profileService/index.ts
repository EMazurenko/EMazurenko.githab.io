import { ProfileService } from './ProfileService';
import { ProfileServiceInMemory } from './ProfileServiceInMemory';

export const profileService: ProfileService = new ProfileServiceInMemory();
