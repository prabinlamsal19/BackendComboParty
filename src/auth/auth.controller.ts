import { Body, Controller, ParseIntPipe, Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
// import { AuthDto } from "./dto";

//here i am putting a global prefix route 'auth'
@Controller('auth')    
export class AuthController{ 
    constructor(private authService: AuthService){} 
    //now we create endpoints for login and signup  
    @Post('signup')  
    signup(@Body('email') email : string , 
            @Body('password', ParseIntPipe) password: string , 
    ){ 
        console.log({ 
            email, typeOfEmail : typeof email , password , typeofPassword: typeof password
        });   
        //dto are objects that are used to take in the request 
        // we do not use the request object. We use the dto instead 

        //normally, here we had to vallidate the input email and name 
        //but we don't need to do that manually in nest 
        //we can use the vallidator library 

        return this.authService.signup();
    } 
    
    @Post('login') 
    login(){ 
        //keep the controller clean 
        //keep it busy with only the request stuff logic
        return this.authService.login(); 
    } 
}  
