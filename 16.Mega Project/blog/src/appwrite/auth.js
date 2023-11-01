import confi from "../config/config";
import {Client, Account, ID} from 'appwrite'


class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(confi.appwriteURL)
            .setProject(confi.appwriteProjectID);

        this.account = new Account(this.client); 
    }

    // Create USer Account
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                // call another method
                return this.login(email, password);
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login
    async login({email, password}){
        try {
           return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    // getCurrentUser
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
    }

    // logoutUser
    async logout(){
        try {
            await this.account.deleteSession()
        } catch (error) {
            throw error
        }
    }
}

const authSer = new AuthService();

export default authSer;