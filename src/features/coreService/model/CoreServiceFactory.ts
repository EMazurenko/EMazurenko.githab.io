import { CoreService } from 'src/features/coreService/model/CoreService';
import { CoreServiceInMemory } from 'src/features/coreService/model/CoreServiceInMemory';
import { CoreServiceRest } from 'src/features/coreService/model/CoreServiceRest';

const COMMAND_ID = '202402_MAZURENKO_EV';

let coreService: CoreService;

switch (process.env.REACT_APP_USE_SERVICES_MODE) {
  case 'inMemory':
    coreService = new CoreServiceInMemory();
    break;
  case 'rest':
    coreService = new CoreServiceRest(process.env.REACT_APP_SERVER_REST_URL, COMMAND_ID);
    break;
}

export default coreService;