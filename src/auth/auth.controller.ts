import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

//here i am putting a global prefix route 'auth'
@Controller('auth')    
export class AuthController{ 
    constructor(private authService: AuthService){ 
    } 
    //now we create endpoints for login and signup  
    
    @Post('signup')  
    signup(): string{ 
        return 'I am signed up'
    } 
    
    @Post ('login') 
    login(){ 
   
        return 'I am logged in'
    }
} 
