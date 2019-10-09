import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

import config from '../config'

import { AccountController } from './apis/account/account.controller'
import { AccountService } from './apis/account/account.service'
import { AuthService } from './apis/auth/auth.service'
import { JwtStrategy } from './apis/auth/jwt.strategy'
import { CatsController } from './apis/cats/cats.controller'
import { CatsService } from './apis/cats/cats.service'
import { CatEntity } from './entities/cat.entity'
import { UserEntity } from './entities/user.entity'

const ENTITIES = [CatEntity, UserEntity]

@Module({
  imports: [
    TypeOrmModule.forRoot(config.orm as TypeOrmModuleOptions),
    TypeOrmModule.forFeature([...ENTITIES]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(config.jwt),
  ],
  controllers: [CatsController, AccountController],
  providers: [CatsService, AuthService, JwtStrategy, AccountService],
  exports: [],
})
export class FeaturesModule {}
