import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContextService } from '../context.service';

@Component({
  selector: 'my-shop-admin-facility-selection',
  templateUrl: './facility-selection.component.html',
  styleUrls: ['./facility-selection.component.scss'],
})
export class FacilitySelectionComponent implements OnInit {
  public facilitiesAsync = this.contextService.waitTillLoggedIn()
  .then(() => this.contextService.getDataFromApiAsync('api/pickjobs/list-facilities'));

  constructor(
    private contextService: ContextService
  ) {
    contextService.checkSession();
  }

  ngOnInit(): void {}
}
