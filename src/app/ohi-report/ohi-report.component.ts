import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Plan } from '../model/plan';
import { Plan, Plan_5219 } from '../model/json_const';


@Component({
  selector: 'app-ohi-report',
  templateUrl: './ohi-report.component.html',
  styleUrls: ['./ohi-report.component.css']
})
export class OhiReportComponent implements OnInit{
  // plan: Plan[] = [
  //   new Plan_5219(),
  //   new Plan_5219(),
  // ];
  plan: Plan = new Plan_5219();
  constructor() {

  }
  ngOnInit(): void {
  }
}
