import { Injectable } from "@angular/core";
import { BehaviorSubject, firstValueFrom, take, filter } from 'rxjs';
import { LoginResultDto } from "@my-shop-admin/api-interfaces";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContextService {
  static CURRENT_SESSION_KEY  = 'currentSession';

  public currentUser$ = new BehaviorSubject<LoginResultDto|null>(null);

  constructor (
    private httpClient: HttpClient
  ) {

  }

  waitTillLoggedIn() {
    return firstValueFrom(this.currentUser$.pipe(
      filter(user => user != null)
    ))
  }

  checkSession () {
    const sessionValue = sessionStorage.getItem(ContextService.CURRENT_SESSION_KEY);

    if (sessionValue) {
      const parsedObj = JSON.parse(sessionValue) as LoginResultDto;

      this.currentUser$.next(parsedObj);

      // todo check expiresIn
    }
  }

  setCurrentUser (loginResult: LoginResultDto) {
    this.currentUser$.next(loginResult);
    sessionStorage.setItem('currentSession', JSON.stringify(loginResult));
  }

  async getDataFromApiAsync<TResult>(
    path: string
  ): Promise<TResult> {
    const loginResult = await firstValueFrom(this.currentUser$);

    if (loginResult == null || loginResult.idToken == null) {
      throw new Error('not logged in');
    }

    const headers: {
      [header: string]: string | string[];
  } = {
    "Authorization": loginResult.idToken
  };

    return firstValueFrom(this.httpClient.get<TResult>(path, {
      responseType: 'json',
      headers
    }).pipe(
      take(1)
    ))
  }
}
