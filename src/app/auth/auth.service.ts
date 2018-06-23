import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    login(loginInfo){
        let url = `auth/login`;
        return this.http.post(url,loginInfo);
    }
}