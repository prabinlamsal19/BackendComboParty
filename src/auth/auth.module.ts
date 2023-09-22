import {Module} from '@nestjs/common'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service'; 
import {JwtModule} from '@nestjs/jwt';  
import { JwtStrategy } from './strategy';

@Module({ 
    imports: [JwtModule.register({})], 
    controllers: [AuthController], 
    providers: [AuthService, JwtStrategy],
})
export class AuthModule{}  

//controller needs to call the service(a function from the service) 
//and controller returns the result to the user 
//but service ko instance is not created in the controller 
// we instead use the injectable to provide the instance to the controller


//Using the jwt strategy, we can protect some of our routes with jwt strategy
//i.e. we can only access the pages if we have the correct jwt.. 
    