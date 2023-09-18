import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

//here i am putting a global prefix route 'auth'
@Controller('auth')    
export class AuthController{ 
    constructor(private authService: AuthService){} 
    //now we create endpoints for login and signup  
    @Post('signup')  
    signup(){ 
        return this.authService.signup();
    } 
    
    @Post('login') 
    login(){ 
        //keep the controller clean 
        //keep it busy with only the request stuff logic
        return this.authService.login(); 
    } 
}  
