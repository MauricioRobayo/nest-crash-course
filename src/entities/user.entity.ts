import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  age?: number;
}
