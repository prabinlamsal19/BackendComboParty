import { Injectable } from "@nestjs/common";

@Injectable({})  
export class AuthService{ 
   login(){ 
    return {msg: "Hello I have logged in."}
   }  

   signup(){ 
    return {msg: "Hello, I have signed up."}
   } 
}  
