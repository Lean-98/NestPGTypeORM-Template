import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class LoginResponseDto {
  @ApiProperty({
    example: 'example@domain.com',
    description: 'The email address of the user.',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: 'https://avatars.githubusercontent.com/u/104113851?v=4',
    description: 'The profile image URL of the user.',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMxMWUyYTNlLWVmYjAtNDEyYi1iNmU1LWMwZDdkMDc0YjI2MyIsImVtYWlsIjoiZXhhbXBsZUBkb21haW4uY29tIiwiaW1hZ2UiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTA0MTEzODUxP3Y9NCIsImlhdCI6MTcyMzA0MDg1OSwiZXhwIjoxNzIzMDU4ODU5fQ.bM2veUZt8lQG6eaa14-3-K2kJlecSB_fSSQDW-igI6U',
    description: 'JWT token for authentication',
  })
  @IsString()
  token: string;
}
