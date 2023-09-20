import {ConfigModule} from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

//configmodule is here for loading .env files
//there is also configservice availaible , that can be imported anywhere we want
@Module({
  imports: [ConfigModule.forRoot({ 
    isGlobal: true,
  }), AuthModule, UserModule, BookmarkModule, PrismaModule],
})
export class AppModule {} 

