import { LoginDto } from './dto/login.dto';
import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';



@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}


    @Post('login')
    async login(
        @Body() data: LoginDto
    ) {
        const usertoken = await this.authService.validateUser(data);
        if (!usertoken) throw new HttpException('Credenciales invalidas', HttpStatus.UNAUTHORIZED);
        return usertoken;
    }
}

