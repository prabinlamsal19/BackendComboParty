import {Module} from '@nestjs/common'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service'; 
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({ 
    imports: [PrismaModule], 
    controllers: [AuthController], 
    providers: [AuthService] 
})
export class AuthModule{}  


//controller needs to call the service(a function from the service) 
//and controller returns the result to the user 
//but service ko instance is not created in the controller 
// we instead use the injectable to provide the instance to the controller
    