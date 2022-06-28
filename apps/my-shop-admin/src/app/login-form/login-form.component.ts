import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDataDto, LoginResultDto } from '@my-shop-admin/api-interfaces';
import { filter, firstValueFrom, take } from 'rxjs';
import { ContextService } from '../context.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-shop-admin-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  emailValue = '';

  passwordValue = '';

  errorMessage = '';

  constructor(
    private httpClient: HttpClient,
    private contextService: ContextService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.contextService.checkSession();

    await firstValueFrom(this.contextService.currentUser$.pipe(
      filter(result => result != null)
    ));

    this.router.navigate(['/facility-selection']);
  }


  async login () {
    this.errorMessage = '';

    const result = await firstValueFrom(this.httpClient.post<LoginResultDto>('api/login', {
      email: this.emailValue,
      password: this.passwordValue
    } as LoginDataDto).pipe(
      take(1)
    ));

    if (result.ok) {
      this.contextService.setCurrentUser(result);
    } else {
      this.errorMessage = result.message ?? 'Unknown Error';

      console.info({
        result
      });
    }

  }
}
