import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PickJobDto } from '@my-shop-admin/api-interfaces';
import { ContextService } from '../context.service';
import { BehaviorSubject, firstValueFrom, take } from 'rxjs';

@Component({
  selector: 'my-shop-admin-pickjob-detail',
  templateUrl: './pickjob-detail.component.html',
  styleUrls: ['./pickjob-detail.component.scss'],
})
export class PickjobDetailComponent implements OnInit {
  public pickjobDetails$ = new BehaviorSubject<PickJobDto|null>(null);

  public startPickJobEnabled = false;
  public completePickJobEnabled = false;

  constructor(
    private contextService: ContextService,
    public activatedRoute: ActivatedRoute
  ) {
    contextService.checkSession();
  }

  async ngOnInit (): Promise<void> {
    await this.contextService.waitTillLoggedIn();

    const routeParams = await firstValueFrom( this.activatedRoute.params.pipe(
      take(1)
    ));

    const aktuelleInfoDesJobs = await this.contextService.getDataFromApiAsync<PickJobDto>(`api/pickjobs/get-job-info/${routeParams['pickjobId']}`);

    this.pickjobDetails$.next(aktuelleInfoDesJobs);

    this.startPickJobEnabled = aktuelleInfoDesJobs.status === 'OPEN';
    this.completePickJobEnabled = false;
  }

  public async startPickJob () {
    this.startPickJobEnabled = false;
    this.completePickJobEnabled = true;

    const routeParams = await firstValueFrom( this.activatedRoute.params.pipe(
      take(1)
    ));

    const pickjobId = routeParams['pickjobId'];

    const result  = await this.contextService.postDataToApiAsync<PickJobDto>('api/pickjobs/start-pickjob/'+pickjobId);

    this.pickjobDetails$.next(result);
  }

  public async completePickJob () {
    this.startPickJobEnabled = false;
    this.completePickJobEnabled = false;

    const routeParams = await firstValueFrom( this.activatedRoute.params.pipe(
      take(1)
    ));

    const pickjobId = routeParams['pickjobId'];

    const result = await this.contextService.postDataToApiAsync<PickJobDto>('api/pickjobs/perfect-pickjob-automatic/'+pickjobId);

    this.pickjobDetails$.next(result);
  }
}
