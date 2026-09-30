import {ApiProperty} from '@nestjs/swagger';

export class claseLogin {
    @ApiProperty({ required: true})
    email: string;

    @ApiProperty({ required: true})
    password: string;

}