import { CoreService } from 'src/features/coreService/model/CoreService';
import { CoreServiceInMemory } from 'src/features/coreService/model/CoreServiceInMemory';
import { CoreServiceRest } from 'src/features/coreService/model/CoreServiceRest';

const COMMAND_ID = '202402_MAZURENKO_EV';

export const coreService: CoreService =
  process.env.REACT_APP_USE_SERVICES_MODE === 'rest'
    ? new CoreServiceRest(process.env.REACT_APP_SERVER_REST_URL, COMMAND_ID)
    : new CoreServiceInMemory();
