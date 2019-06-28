import {GitService} from './gitservice';
import {GIT_REPOS_ENDPOINT} from '../../const'

export class GitRepoService extends GitService {

    constructor() {
        super(GIT_REPOS_ENDPOINT);
    }

    getRepos() {
        return super.getData();
    }

    getRepoByID(id) {
        return super.getDataBy(id);
    }

    addRepo(repo) {
        return super.insertData(repo);
    }

    editRepo(repo) {
        return super.updateDataByID(repo);
    }

    deleteRepo(repo) {
        return super.deleteDataByID(repo);
    }

}