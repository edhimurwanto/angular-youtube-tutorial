import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    constructor(private readonly http: HttpClient) { }

    getAll() {
        return this.http.get('https://dummyjson.com/users')
    }
}