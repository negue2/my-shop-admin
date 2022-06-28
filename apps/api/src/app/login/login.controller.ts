import { LoginDataDto, LoginResultDto } from '@my-shop-admin/api-interfaces';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fetch from 'node-fetch';

@Controller('login')
export class LoginController {
  constructor(private configService: ConfigService) {

  }

  @Post()
  public async sendLoginToGoogle(
    @Body() loginForm: LoginDataDto
  ): Promise<LoginResultDto> {
    const response = await fetch(this.configService.get('API_AUTH_URL'), {
      method: 'post',
      body: JSON.stringify({
        email: loginForm.email,
        password: loginForm.password,
        returnSecureToken: true
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    const responseBody = await response.json();

    if (responseBody.error) {
      const errorMessageFromGoogle = responseBody.error.message;

      switch (errorMessageFromGoogle) {
        case 'INVALID_EMAIL':
        case 'INVALID_PASSWORD': {
          // Security: falls eine email gefunden wurde,
          // muss nicht noch extra zeigen das nur noch das Kennwort falsch ist
          return {
            ok: false,
            message: 'Unknown Account'
          }
        }
        default: {
          return {
            ok: false,
            message: responseBody.error.message
          };
        }
      }
    }

    console.info(responseBody);

    return {
      ok: true,
      displayName: responseBody.displayName,
      idToken: responseBody.idToken,
      expiresIn: new Date(Date.now() + Number(responseBody.expiresIn))
    };
  }
}
