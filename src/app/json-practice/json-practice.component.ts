import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Plan } from '../model/plan';
import { Plan, Plan_5219 } from '../model/json_const';
// import {  } from '../model/NewBase_MD_5219.json';

// import { } from '../planInfo-MD_5219.json';

/*

export class JsonPracticeComponent implements OnInit {

  // plan$: Observable<Plan_5219>; //Yes, needs $ sign to function properly.
  plan : Plan[] = [
    {
      planInfo: {
        productFamily: "something 1",
        tierType: "something 2",
        priorApprovalResponsibilities: [
          {
            responsibleParty: "something 3",
            networkType: "something 4"
          }
        ],
        marketSegment: "something 5"
      }
    }
  ];

  // variab : [{"planInfo": "thing"}];

  // constructor(route: ActivatedRoute, userService: UserService) {
  //   this.user$ = route.params.pipe(
  //     map(params => params.id),
  //     switchMap(id => userService.find(id))
  //   ); //Constructor necessary for routing the user ID to the observable.
  // }

  constructor() { 
    // this.plan$ = new Observable<Plan_5219>(); //Needed?
    // this.plan = new Plan_5219();
    // this.plan.hi = "random";
    // this.plan["planInfo"]
    // this.plan.plans["planInfo"] = "meme";
    // this.variab["plan"] = this.plan.plans;
  }

  ngOnInit(): void {
  }

}
*/


@Component({
  selector: 'app-json-practice',
  templateUrl: './json-practice.component.html',
  styleUrls: ['./json-practice.component.css']
})
export class JsonPracticeComponent implements OnInit{
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
