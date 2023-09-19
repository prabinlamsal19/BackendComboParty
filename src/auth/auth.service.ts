import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})  
export class AuthService{  
   constructor(private prisma: PrismaService) { 

   }
   login(){ 
    return {msg: "Hello I have logged in."}
   }  

   signup(){ 
    return {msg: "Hello, I have signed up."} 
   } 
}   