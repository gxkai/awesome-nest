import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcryptjs'
import { Repository } from 'typeorm'

import config from '../../../config'
import { AccountDto } from '../../dtos/account.dto'
import { UserEntity } from '../../entities/user.entity'
import { Token } from '../../interfaces/auth.interface'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async createToken(authDto: AccountDto): Promise<Token> {
    const user: UserEntity = await this.userRepository.findOne({
      email: authDto.email,
    })
    if (!user) {
      throw new UnauthorizedException('账号错误')
    }
    if (!bcrypt.compareSync(authDto.password, user.password)) {
      throw new UnauthorizedException('密码错误')
    }
    const accessToken = this.jwtService.sign({ email: authDto.email })
    return {
      expires_in: config.jwt.signOptions.expiresIn,
      access_token: accessToken,
    }
  }

  async validateUser(payload: UserEntity): Promise<any> {
    return await this.userRepository.find({ email: payload.email })
  }
}
