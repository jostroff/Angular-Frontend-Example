import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Plan } from '../model/plan';
import { Plan, Plan_5219, Copay, Benefit,  Deductible,
  OopMax, Coinsurance, LimitSequence, BenefitLimit, 
  Indicator, Network
} from '../model/json_const';


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

  copays: Copay[] = [];
  copayTiers: string[] = ["", "", "", "", ""];

  deductibles: Deductible[] = [];
  nonTieredDDMappings: string[] = ["n/a", "n/a", "n/a", "n/a", "No", "No"];
  nonTieredDDNames: string[] = [
    "In-Network Deductible Per Member",
    "Out-of-Network Deductible Per Member",
    "In-Network Deductible Per Family",
    "Out-of-Network Deductible Per Family",
    "4 quarter 3 month Deductible Carry Over",
    "Separate DME Deductible"
  ];
  
  constructor() {
    // <ng-container *ngFor="let benefit of plan.benefits">
    //       <ng-container *ngFor = "let copay of benefit.benefitCostsharing.copays">
    //         {{ copay.amount }}
    this.generateCopays();
  }
  ngOnInit(): void {
  }
  generateCopays(): void {
    for (var benefit of this.plan.benefits){
      for (var copay of benefit.benefitCostsharing.copays){
        this.copays.push(copay);
      }
      for (var deductible of benefit.benefitCostsharing.deductibles){
        this.deductibles.push(deductible);
      }


      for (var seq of benefit.benefitCostsharing.sequences){
        for (var copay of seq.copays){
          this.copays.push(copay);
        }
      }

      //PlanCostSharing.planDeductibles, benefitCostSharing.deductibles
      for (var seq of benefit.benefitCostsharing.sequences){
        for (var deductible of seq.deductibles){
          this.deductibles.push(deductible);
        }
      }
    }
    //Deductible, OopMax, Coinsurance, LimitSequence, 
    //BenefitLimit, Indicator, Network
    for (var copay of this.copays){
      // + (string) converts to (number).
      if (copay.networkType == "OON")
        this.copayTiers[4] += copay.amount + " copay ";
      else
        this.copayTiers[ (+ copay.networkTier) - 1] += copay.amount + " copay ";
    }

    for (var deductible of this.deductibles){
      if (deductible.coverageType == "Member" && deductible.networkType == "IN")
        this.nonTieredDDMappings[0] = deductible.amount;
      else if (deductible.coverageType == "Member" && deductible.networkType == "OON")
        this.nonTieredDDMappings[1] = deductible.amount;
      else if (deductible.coverageType == "Family" && deductible.networkType == "IN")
        this.nonTieredDDMappings[2] = deductible.amount;
      else if (deductible.coverageType == "Family" && deductible.networkType == "OON")
      this.nonTieredDDMappings[3] = deductible.amount;
      else if (deductible.coverageType == "Member" && deductible.networkType == "IN")
        this.nonTieredDDMappings[4] = deductible.amount;
      else if (deductible.coverageType == "Member" && deductible.networkType == "OON")
        this.nonTieredDDMappings[5] = deductible.amount;
    }
      /**
        "coverageType": "Member",
        "amount": "$8000",
        "networkTier": "1",
        "providerTier": "",
        "providerTierCode": "0",
        "location": "",
        "networkType": "OON",

        nonTieredDDMappings
       */
  }

  createRange(number){ //To be used as indices in for loops on HTML.
    var items: number[] = [];
    for(var i = 0; i < number; i++)
       items.push(i);
    return items;
  }
}