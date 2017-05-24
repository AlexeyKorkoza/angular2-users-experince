import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { JwtService } from './jwt.service';
import { AppConfig } from '../app.config';

@Injectable()
export class ApiService {

    token: any;

    constructor(private http: Http,
        private jwtService: JwtService,
        private appConfig: AppConfig) { }

    private setHeaders(): Headers {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        if (this.jwtService.getToken()) {
            this.token = this.jwtService.getToken();
            headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        }
        return new Headers(headersConfig);
    }

    getUserByToken() {
        return this.http.get(this.appConfig.urlServer + "/api/check", { headers: this.setHeaders() })
            .map((res: Response) => {
                let resp = res.json();
                console.log(resp);
                return resp;
            })
    }
}