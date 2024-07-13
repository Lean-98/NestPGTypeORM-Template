import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
// import { AuthGuard } from './auth.guard';
import { User } from './entities/user.entity';
import { Auth, GetUser, RoleProtected } from './decorators';
import { UserRoleGuard } from './guards/user-role.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus(user);
  }

  @Get('private')
  @RoleProtected('super-user', 'admin') // use this to protect the route
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute(@GetUser() user: User) {
    return {
      message: 'This is a private route',
      user,
    };
  }
}
