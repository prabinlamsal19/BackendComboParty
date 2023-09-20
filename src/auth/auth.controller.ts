import { Body, Controller, Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

//here i am putting a global prefix route 'auth'
@Controller('auth')    
export class AuthController{ 
    constructor(private authService: AuthService){} 
    //now we create endpoints for login and signup  
    @Post('signup')  
    signup(@Body() dto: AuthDto){ 
        console.log({ 
            dto : dto 
        });   
        //dto are objects that are used to take in the request 
        // we do not use the request object. We use the dto instead 

        //normally, here we had to validate the input email and name 
        //but we don't need to do that manually in nest 
        //we can use the class validator and class transformer library 
        //(present on the nest js official documentation)  

        return this.authService.signup(dto);
    } 
    
    @Post('login') 
    login(@Body() dto: AuthDto){ 
        //keep the controller clean 
        //keep it busy with only the request stuff logic
        return this.authService.login(dto); 
    } 
}  
