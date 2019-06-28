import { GitRepoService } from "../services/api-services/gitreposervice";
import { UserService } from "../services/api-services/userservice";

const guest = { role: 'guest' };

const userService = new UserService()

export default {
    // state - data shared across the components
    // multiple components may use the same state
    gitRepoService: new GitRepoService(), // dependency injection
    userService: userService, // dependency injection
    currentUser: guest,

    // test without server
    guest: guest,
    userDHCD: userService.loginResponseDHCD.user,
    userDCM: userService.loginResponseDHCD.user
}