import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ required: true, example: 'alguien@empresa.com' })

    email: string;

    @ApiProperty({ required: true, example: 'Nombre Apellido' })
    name: string;

    username?: string;
    @ApiProperty({ required: true, example: 'contra123' })

    password: string;

    @ApiProperty({ required: true, example: 1 , description: 'id del tenant'})
    tenantId: number;
}
