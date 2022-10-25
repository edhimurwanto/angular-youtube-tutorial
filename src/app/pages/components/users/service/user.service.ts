import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export default class UserService {

    async getAllUser() {
        return [
            {
                firstName: 'Edi',
                lastName: 'Murwanto'
            },
            {
                firstName: 'John',
                lastName: 'Thor'
            },
            {
                firstName: 'Gabriel',
                lastName: 'Brown'
            }
        ]
    }

}