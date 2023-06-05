import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://aegis:aegis@baekettle.lkh9f.mongodb.net/?retryWrites=true&w=majority'), TestModule, UserModule, AuthModule],
})

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
