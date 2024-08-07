import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CheckStatusResponseDto {
  @ApiProperty({
    example: 'fd276393-eb22-42a1-8caa-1cb05f8c79d1',
    description: 'The unique identifier of the user',
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    example: 'example@domain.com',
    description: 'The email address of the user',
  })
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    example: false,
    description: 'Indicates whether the email address is verified',
  })
  @IsBoolean()
  emailVerified: boolean;

  @ApiProperty({
    example: 'Alexis',
    description: 'The first name of the user',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Bazan',
    description: 'The last name of the user',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'https://avatars.githubusercontent.com/u/104113851?v=4',
    description: 'The profile image URL of the user',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    example: true,
    description: 'Indicates whether the user is active',
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    example: ['user'],
    description: 'Roles assigned to the user',
    required: false,
    isArray: true,
  })
  @IsArray()
  @IsOptional()
  roles?: string[];

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZkMjc2MzkzLWViMjItNDJhMS04Y2FhLTFjYjA1ZjhjNzlkMSIsImVtYWlsIjoiZXhhbXBsZUBkb21haW4uY29tIiwiaW1hZ2UiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTA0MTEzODUxP3Y9NCIsImlhdCI6MTcyMzA0MzY0NSwiZXhwIjoxNzIzMDYxNjQ1fQ.aZzHL2DLzZaQgFcJzC6Ud_e6M-h0nvq9TvfdSSH4WKI',
    description: 'JWT token for authentication',
  })
  @IsString()
  token: string;
}
