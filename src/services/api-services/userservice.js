import { APIService } from './apiservice';
import { USER_API_URL } from '../../const'
import { USER_ENDPOINT } from '../../const'

// this class is used to test only, in real life we should build a server and call api from this server instead
import { GIT_ACCESS_TOKEN } from '../../const'


export class UserService extends APIService {

    constructor() {
        super(USER_API_URL, USER_ENDPOINT, null);
    }

    login(username, password) {
        const self = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (username === 'dohungcuongdev' && password === '123')
                    resolve(self.loginResponseDHCD);
                else if (username === 'do-cuong-mulodo' && password === '456')
                    resolve(self.loginResponseDCM);
                else
                    reject(new Error('wrong user name or password'));
            }, 1);
        });
    }

    changeUserAddress(username, address) {
        const self = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (username === 'dohungcuongdev' || username === 'do-cuong-mulodo' || address !== null || address !== '') {
                    if (username === 'dohungcuongdev') {
                        self.loginResponseDHCD.user.address = address;
                    }
                    if (username === 'do-cuong-mulodo') {
                        self.loginResponseDHCD.user.address = address;
                    }
                    resolve('change address sucessfully');
                }
                else
                    reject(new Error('problem cannot change address of user ' + username));
            }, 1);
        });;
    }

    logout() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('logout successfully');
            }, 1);
        });
    }

    loginResponseDHCD = {
        user: {
            "id": 1,
            "username": "dohungcuongdev",
            "address": "24/7",
            "role": "user"
        },
        token: GIT_ACCESS_TOKEN
    }

    loginResponseDCM = {
        user: {
            "id": 2,
            "username": "do-cuong-mulodo",
            "address": "Tran Nao",
            "role": "admin"
        },
        token: GIT_ACCESS_TOKEN
    }
}