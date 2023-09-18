import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()    
export class AuthController{ 
    constructor(private authService: AuthService){ 
    }  

    //now we create endpoints for login and signup 
} 
