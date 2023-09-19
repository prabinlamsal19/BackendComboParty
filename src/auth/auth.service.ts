import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service"; 
import * as argon from 'argon2'; 
import { AuthDto } from "./dto";

@Injectable({})  
export class AuthService{  
   constructor(private prisma: PrismaService) {} 
   
   async signup(dto: AuthDto){ 
      const hash = await argon.hash(dto.password); 
      const user = await this.prisma.user.create({ 
         data: { 
            email: dto.email, 
            hash, 
         }, 

      }); 
      return user; 
   } 

   login(){ 
    return {msg: "Hello I have logged in."} 
   }  
}   