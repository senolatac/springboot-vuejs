import axios from 'axios';
import UserService from './user.service';

const API_URL = 'http://localhost:8080/api/admin/';

class AdminService {
    constructor() {
        UserService.currentUser.subscribe(data => {
            this.headers = {
                'Content-Type':'application/json',
                'authorization':'Bearer ' + (data ? data.token:'')
            };
        });
    }

    findAllUsers() {
        return axios.get(API_URL + 'all', {headers: this.headers});
    }
}

export default new AdminService();