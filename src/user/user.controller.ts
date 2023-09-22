import { Controller, Get,Req,  UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; 
import {Request} from 'express';

@Controller('users')
export class UserController { 
 @UseGuards(AuthGuard('jwt'))
 @Get('me') 
 getMe(@Req() req: Request){ 
    return req.user;  
 } 
} 

//guards basically checks the jwt  
//guards protect server from unauthorized requests