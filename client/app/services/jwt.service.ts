import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

@Injectable()
export class JwtService {

    constructor(private localStorageService: LocalStorageService) { }

    getToken() {
        return localStorage.getItem('token');
    }

    setToken(token: any) {
        localStorage.setItem('token', token);
    }

    removeToken() {
        localStorage.removeItem('token');
    }
}