import userEvent from "@testing-library/user-event";
import axios from "axios";
import { UserService } from "./UserService";

export class UserApiService{
    private static serverUrl:string="https://jsonplaceholder.typicode.com";

    public static getUser(){
        let dataUrl:string=`${this.serverUrl}/users`;
        return axios.get(dataUrl);
    }
    public static getUserById(userId:string){
        let dataUrl:string=`${this.serverUrl}/users/${userId}`;
        return axios.get(dataUrl);
    }
}
