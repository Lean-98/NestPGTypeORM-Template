import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserResponseDto {
  @ApiProperty({
    example: 'example@domain.com',
    description: 'The email address of the newly created user.',
  })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    example: 'Alexis',
    description: 'The first name of the newly created user.',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Bazan',
    description: 'The last name of the newly created user.',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'https://avatars.githubusercontent.com/u/104113851?v=4',
    description: 'The profile image URL of the newly created user.',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    example: 'aec687f0-cfc5-493e-95da-3a664de3b05a',
    description: 'The unique ID of the newly created user.',
  })
  @IsString()
  id: string;

  @ApiProperty({
    example: false,
    description: 'Whether the email of the user has been verified.',
  })
  @IsBoolean()
  emailVerified: boolean;

  @ApiProperty({
    example: true,
    description: 'Whether the user is active.',
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    example: ['user'],
    description: 'Roles assigned to the newly created user.',
    isArray: true,
    enum: ['admin', 'super-user', 'user'],
  })
  @IsArray()
  @IsString({ each: true })
  roles: string[];

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlYzY4N2YwLWNmYzUtNDkzZS05NWRhLTNhNjY0ZGUzYjA1YSIsImVtYWlsIjoiZXhhbXBsZGhkZUBkb21haW4uY29tIiwiaW1hZ2UiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTA0MTEzODUxP3Y9NCIsImlhdCI6MTcyMzA0MjY3MywiZXhwIjoxNzIzMDYwNjczfQ.AR42VapJZj-6ilfs7rsjdoBfgi2ahqZpehILuu7eabw',
    description: 'JWT token for authentication.',
  })
  @IsString()
  token: string;
}
