import { Injectable } from '@nestjs/common';
import { HEADER_AUTHORIZATION } from '@my-shop-admin/api-interfaces';
import fetch from 'node-fetch';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class AppService {
  private baseUrl = this.configService.get('API_BASE_URL');

  constructor(private configService: ConfigService) {

  }

  getAuthorizationKey(
    req: Request
  ): string {
    const authResult = req.headers.authorization;

    if (typeof authResult === 'undefined') {
      console.info({
        authResult,
        header1: req.header(HEADER_AUTHORIZATION),
        header2: req.headers
      });

      return '';
    }

      return authResult;

  }

  async sendRequest<TResult>(
    path: string,
    authToken: string,  // optimierung dies anhand einer Middelware bekommen/nutzen
    method = 'get',
    body?: unknown
  ): Promise<TResult> {

    const fetchRequestPayload: {
      method: string,
      body?: string,
      headers: Record<string, string>
    } = {
      method,
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    };

    if (body) {
      fetchRequestPayload.body = JSON.stringify(body);
      fetchRequestPayload.headers['Content-Type'] = 'application/json';
    }

    const apiUrl = `${this.baseUrl}/${path}`;

    const response = await fetch(apiUrl, fetchRequestPayload);

    if (response.ok) {
      const responseBody: any = await response.json();

      console.info(JSON.stringify(
        responseBody
      ));

      return responseBody;
    } else {
      const textResponse = await response.text();
      throw new Error(`Error requesting: ${path} - ${textResponse}`);
    }
  }
}
