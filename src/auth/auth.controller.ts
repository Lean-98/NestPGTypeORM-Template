import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  CheckStatusResponseDto,
  CreateUserDto,
  LoginResponseDto,
  LoginUserDto,
  CreateUserResponseDto,
} from './dto';
// import { AuthGuard } from './auth.guard';
import { User } from './entities/user.entity';
import { Auth, GetUser } from './decorators';
import { ApiCrudResponses } from '../common/decorators/apiCrudResponses.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiCrudResponses(CreateUserResponseDto, 'create', 'User')
  createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  @ApiCrudResponses(LoginResponseDto, 'login', 'User')
  loginUser(@Body() loginUserDto: LoginUserDto): Promise<LoginResponseDto> {
    return this.authService.login(loginUserDto);
  }

  @ApiBearerAuth()
  @ApiCrudResponses(CheckStatusResponseDto, 'status', 'User')
  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus(user);
  }

  // Example route protected
  @ApiBearerAuth()
  @Get('private')
  @Auth('admin', 'super-user')
  privateRoute(@GetUser() user: User) {
    return {
      message: 'This is a private route',
      user,
    };
  }
}
