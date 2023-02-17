import { IsString } from "class-validator";
import { IsIn, IsNotEmpty } from "class-validator/types/decorator/decorators";
import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required: true})
    username: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({required: true})
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['WEB','ANDROID','IOS','LINUX','WINDOWS','MAC'])
    @ApiProperty({required: true})
    device: string;
}