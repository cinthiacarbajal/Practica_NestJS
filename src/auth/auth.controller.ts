import { claseLogin } from './dto/login.dto';
import { Body, Controller, Post } from '@nestjs/common';



@Controller('auth')
export class AuthController {

    @Post('login')
    login(
        @Body() data: LoginDto
    ) 
        {
        // Implementation for login
    }
}
