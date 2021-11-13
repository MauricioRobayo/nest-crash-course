import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty({ required: false })
  readonly age: number;
}
