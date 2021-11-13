import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers() {
    return this.usersService.findAll();
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.create(body);
  }
}
