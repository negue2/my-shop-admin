import { FacilityDto, PickJobDto } from '@my-shop-admin/api-interfaces';
import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from '../app.service';
import { Request } from 'express';

interface FacilitiesResult {
  facilities: FacilityDto[]
  total: number;
}

interface PickjobsResult {
  pickjobs: PickJobDto[]
  total: number;
}


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

    const response = await this.appService.sendRequest<FacilitiesResult>('api/facilities?size=150', authorization);

    return response.facilities.filter(facility => facility.status === 'ONLINE');
  }

  @Get('list-pickjobs')
  async listpickjobs (
    @Req() req: Request
  ) {
    const authorization = this.appService.getAuthorizationKey(req);

    const response = await this.appService.sendRequest<PickjobsResult>('api/pickjobs?size=25', authorization);

    return response.pickjobs.filter(pickjob => pickjob.status === 'OPEN');
  }

  @Get('get-job-info/:id')
  async getJobInfo (
    @Req() req: Request,
    @Param('id') id: string
  ) {
    const authorization = this.appService.getAuthorizationKey(req);

    const response = await this.appService.sendRequest<PickJobDto>(`api/pickjobs/${id}`, authorization);


    return response;
  }

  @Post('start-pickjob/:id')
  async startPickJob (
    @Req() req: Request,
    @Param('id') id: string
  ) {
    const authorization = this.appService.getAuthorizationKey(req);

    const response = await this.appService.sendRequest<PickJobDto>(
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


  @Post('perfect-pickjob-automatic/:id')
  async perfectPickJobAutomatic (
    @Req() req: Request,
    @Param('id') id: string
  ) {
    const authorization = this.appService.getAuthorizationKey(req);

    const pickJobInfo = await this.appService.sendRequest<PickJobDto>(`api/pickjobs/${id}`, authorization);

    const response = await this.appService.sendRequest<PickJobDto>(`api/pickjobs/${id}`, authorization,
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

    return response;
  }
}
