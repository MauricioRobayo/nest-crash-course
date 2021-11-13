import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsAlphanumeric()
  @ApiProperty()
  @MaxLength(10)
  readonly name: string;

  @ApiProperty({ required: false })
  readonly age: number;
}
