import { Component, OnInit } from '@angular/core';
import { PickJobDto } from '@my-shop-admin/api-interfaces';
import { ContextService } from '../context.service';

@Component({
  selector: 'my-shop-admin-pickjob-selection',
  templateUrl: './pickjob-selection.component.html',
  styleUrls: ['./pickjob-selection.component.scss'],
})
export class PickjobSelectionComponent implements OnInit {
  public pickJobsAsync = this.contextService.waitTillLoggedIn()
  .then(() => this.contextService.getDataFromApiAsync<PickJobDto[]>('api/pickjobs/list-pickjobs'));

  constructor(
    private contextService: ContextService
  ) {
    contextService.checkSession();
  }

  ngOnInit(): void {}
}
