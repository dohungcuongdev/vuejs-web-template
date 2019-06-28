import {APIService} from './apiservice';
import {LOCAL_STORAGE_GIT_TOKEN} from '../../const';

let config = {
    headers: {
        "Authorization": "bearer " + localStorage.getItem(LOCAL_STORAGE_GIT_TOKEN),
        "Accept": "application/json",
        //"cache-control": "no-cache",
    }
};

export class GitService extends APIService {

    constructor(endpoint) {
        super(null, endpoint, config);
    }
}