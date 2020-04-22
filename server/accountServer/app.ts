import {start} from './account'
import * as config from '../config/config';

const accountConfig = config.account_server();
start(accountConfig)