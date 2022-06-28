import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from '../app.service';
import {Facility, PickJobsConnection, QueryResolvers} from '../../generated/graphql'
import { Request } from 'express';


interface GraphQLResult<TData> {
  data: TData;
}

// todo cleanup
interface PickjobsWithFacilityInformation {
  facilityPickJobs: PickJobsConnection,
  facility: Facility
}

@Controller('graphql-bridge')
export class GraphqlBridgeController {
  constructor(
    private appService: AppService
  ) {

  }

  @Get('pickjobs/:facilityId')
  async pickjobs(
    @Param('facilityId') facilityId: string,
    @Req() req: Request
  ): Promise<PickjobsWithFacilityInformation> {
    const authorization = this.appService.getAuthorizationKey(req);

    const payload = {
      "query": `
      {
        facilityPickJobs(
          facilityRef: "${facilityId}"
          status: [OPEN, IN_PROGRESS, CLOSED]
        ) {
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              id
              pickLineItems {
                id
                picked
                status
                article {
                  title
                  imageUrl
                }
              }
            }
          }
          totalCount
        }

        facility(id: "${facilityId}") {
          version
          created
          lastModified
          id
          name
          status
          locationType
          tenantFacilityId
          contact {
            firstName
            lastName
            roleDescription
            customAttributes
          }
          services {
            type
          }
          customAttributes
          closingDays {
            reason
            date
            recurrence
          }
          fulfillmentProcessBuffer
        }
      }

      ` ,
      "variables":{},
      "operationName":null
    };


    const result = await this.appService.sendRequest<GraphQLResult<PickjobsWithFacilityInformation>>(
      'graphql', authorization, 'POST', payload
    );

    return result.data;
  }
}
