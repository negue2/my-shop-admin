import { HEADER_AUTHORIZATION, PickJobDto } from '@my-shop-admin/api-interfaces';
import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from '../app.service';
import { Request } from 'express';

@Controller('pickjobs')
export class PickjobsController {
  constructor(
    private appService: AppService
  ) {

  }

  @Get('list-facilities')
  async listFacilities (
    @Req() req: Request
  ) {
    // todo middleware / oder ähnliches damit es automatisch zum Controller Construktor kommt
    const authorization = this.appService.getAuthorizationKey(req);

console.info({
  authorization
});

    const response = await this.appService.sendRequest('api/facilities', authorization);

    console.info(JSON.stringify(
      response
    ));

    return response;
  }

  @Get('list-pickjobs')
  async listpickjobs (
    @Req() req: Request
  ) {
    const authorization = this.appService.getAuthorizationKey(req);

    const response = await this.appService.sendRequest('/api/pickjobs?size=25', authorization);

    console.info({
      response
    });

    return response;
  }

  @Get('get-job-info/:id')
  async getJobInfo (
    @Req() req: Request,
    @Param('id') id: string
  ) {
    const authorization = this.appService.getAuthorizationKey(req);

    const response = await this.appService.sendRequest(`api/pickjobs/${id}`, authorization);

    console.info({
      response
    });

    return response;
  }

  @Get('start-pickjob/:id')
  async startPickJob (
    @Req() req: Request,
    @Param('id') id: string
  ) {
    const authorization = this.appService.getAuthorizationKey(req);

    const response = await this.appService.sendRequest(
      `api/pickjobs/${id}`,
      authorization,
      'patch', {
         "version": 1,
         "actions": [
           {
             "action": "ModifyPickJob",
             "status": "IN_PROGRESS"
           }
         ]
      }
    );

    console.info({
      response
    });

    return response;
  }


  @Get('perfect-pickjob-automatic/:id')
  async perfectPickJobAutomatic (
    @Req() req: Request,
    @Param('id') id: string
  ) {
    const authorization = this.appService.getAuthorizationKey(req);

    const pickJobInfo = await this.appService.sendRequest<PickJobDto>(`api/pickjobs/${id}`, authorization);

    const response = await this.appService.sendRequest(`api/pickjobs/${id}`, authorization,
    'patch',
      {
       "version": 2,
       "actions": [
         {
             "action": "ModifyPickJob",
             "status": "CLOSED"
         },
         ...pickJobInfo.pickLineItems.map(pickLineItem => {
           return {
             id: pickLineItem.id,
             action: "ModifyPickLineItem",
             status: "CLOSED",
             picked: pickLineItem.quantity
           }
         })
       ]
     });

    console.info({
      response
    });

    return response;
  }
}
