import { NewOrderDto } from '@my-shop-admin/api-interfaces';
import { Controller, Post, Req } from '@nestjs/common';
import { AppService } from '../app.service';
import { Request } from 'express';

@Controller('order')
export class OrderController {
  constructor(
    private appService: AppService
  ) {

  }

  @Post()
  async createDummyOrder (
    @Req() req: Request
  ): Promise<any> {
    const authorization = this.appService.getAuthorizationKey(req);

    const newOrder: NewOrderDto = {
      "consumer": {
        "addresses": [
          {
            "additionalAddressInfo": "to care of: Mrs. Müller",
            "city": "Langenfeld",
            "country": "DE",
            "houseNumber": "42a",
            "phoneNumbers": [
              {
                "label": "string",
                "type": "MOBILE",
                "value": "string"
              }
            ],
            "postalCode": "40764",
            "street": "Hauptstr.",
            "companyName": "Speedy Boxales Ltd.",
            "firstName": "Maxine",
            "lastName": "Muller",
            "salutation": "Frau"
          }
        ],
        "email": "max@speedyboxales.com"
      },
      "orderDate": new Date(),
      "orderLineItems": [
        {
          "article": {
            "imageUrl": "string",
            "tenantArticleId": "cola-1",
            "title": "Coca Cola 1L Glasflasche",
            "attributes": []
          },
          "measurementUnitKey": "liter",
          "quantity": 6,
          "scannableCodes": [
            "string"
          ],
          "shopPrice": 16
        },
        {
          "article": {
            "imageUrl": "string",
            "tenantArticleId": "snickers-eis-1",
            "title": "Snickers Eis 8er Packung",
            "attributes": []
          },
          "measurementUnitKey": "piece",
          "quantity": 2,
          "scannableCodes": [
            "string"
          ],
          "shopPrice": 2
        }
      ],
      "status": "OPEN",
      "tenantOrderId": "my-order-2"
    };


    const response = await this.appService.sendRequest(
      'api/orders',
      authorization,
      'post',
      newOrder
    );

    console.info({
      response
    });

    return response;
  }
}
