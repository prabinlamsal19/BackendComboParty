import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

//if we don't use any dependencies inside, we don't actually need the 
// injectable decorator 
//here we want to use the configmodule's service configservice 
//and we take in.env from the config service
//after we export the config module of course... by using isGlobal argument
@Injectable()
export class PrismaService extends PrismaClient{
    constructor(config: ConfigService){  
        super( { 
            datasources: { 
                db: { 
                    url:  config.get('DATABASE_URL'),
                },  
            } 
        }); 
        console.log(config.get('DATABASE_URL')); 
    }
};  

