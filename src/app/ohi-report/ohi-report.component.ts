import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { Plan } from '../model/plan';
import { Plan, Plan_5219, Copay, Benefit,  Deductible,
  OopMax, Coinsurance, LimitSequence, BenefitLimit, 
  Indicator, Network, Attribute
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

  column: boolean[] = [];

  copays: Copay[] = [];
  copayTiers: string[][] = [[], [], [], [], []];
  officeVisits: string[][] = [[], []];

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

  oopMaxs: OopMax[] = [];
  oopMaxDisplays: string[] = ["", "", "", ""];
  
  coinsurances: Coinsurance[] = [];
  coinsuranceInNetworkDisplays: string[] = [];
  coinsuranceOutNetworkDisplays: string[] = [];

  configNotes: string[] = [];

  exclusions: string[] = [];

  //"coverageRange": "60 months",
  // "value": "$1500",
  // "limitType": "Benefit Maximum",
  // "frequency": "per Ear",
  // "unmappedAttributes": [
  //     {}
  // ],
  // "unmappedIndicators": [
  //     {}
  // ]
  limitsDisplayLeft: string[] = []; //Benefit.benefitLimits
  limitsDisplayRight: string[] = [];

  stateMandates: string[] = []; //
  mandateBenefits: string[] = []; //Benefit serviceName

  indicators: Indicator[] = [];

  planLevelNetworks: Network[] = []; //--Plan Level Network
  benefitLevelNetworks: Network[] = [];
  benefitNetworkCodes: string[] = []; //Codes to associate to benefits.

  /*
  "serviceCode": "SER0141",
  "benefitCategory": "Medical Equipment, Devices and Supplies",
  "serviceName": "Hearing Aids",
  "serviceProviderCategory": "",
  "placeOfService": "Professional",
  "costshareGroupingName": "Medical Equipment, Devices and Supplies",
  "costshareOrder": "Deductible,Copay,Coinsurance",
  "costshareRegimeIN": "Deductible then Coinsurance",
  "costshareRegimeINCode": "PRD_DE_CN",
  "costshareRegimeOON": "Deductible then Coinsurnace",
  "costshareRegimeOONCode": "PRD_DE_CN",
  "stateMandate": "",
  "isExcluded": "false",
  "locationCode": "12",
  "benefitLimits": {
    "limits": [
        {
            "coverageRange": "60 months",
            "value": "$1500",
            "limitType": "Benefit Maximum",
            "frequency": "per Ear",
            "unmappedAttributes": [
                
            ],
            "unmappedIndicators": [
                
            ]
        }
    ],
  */

  constructor() {
    // <ng-container *ngFor="let benefit of plan.benefits">
    //       <ng-container *ngFor = "let copay of benefit.benefitCostsharing.copays">
    //         {{ copay.amount }}
    this.generateAttributes();
  }
  ngOnInit(): void {
  }
  generateAttributes(): void {
    this.column["planInfo"] = true; //Note: Must initialize here. More readable.
    this.column["copay"] = true;
    this.column["emergency_room"] = true;
    this.column["inpatient_sdc"] = true;
    this.column["nontiered_DD"] = true;
    this.column["tiered_DD"] = true;
    this.column["oopm"] = true;
    this.column["coinsurance"] = true;
    this.column["configNotes"] = true;
    this.column["exclusions"] = true;
    this.column["limits"] = true;
    this.column["mandates"] = true;
    this.column["indicators"] = true;
    this.column["networks"] = true;

    for (var benefit of this.plan.benefits){
      for (var copay of benefit.benefitCostsharing.copays){
        this.copays.push(copay);
        //Add OfficeVisits below.
      }
      for (var deductible of benefit.benefitCostsharing.deductibles){
        this.deductibles.push(deductible);
      }
      for (var oopMax of benefit.benefitCostsharing.oopMaximums) {
        this.oopMaxs.push(oopMax);
      }
      for (var coinsurance of benefit.benefitCostsharing.coinsurances){
        this.coinsurances.push(coinsurance);
      }
      //benefitLimits.limits, sequences
      for (var benefitLimit of benefit.benefitLimits.limits){
        this.limitsDisplayLeft.push(benefit.serviceName);
        this.limitsDisplayRight.push(benefitLimit.value + "-" + benefitLimit.frequency + "-" + benefitLimit.coverageRange);
      }

      if (benefit.isExcluded && !this.exclusions.includes(benefit.serviceName))
        this.exclusions.push(benefit.serviceName);

      if (!this.mandateBenefits.includes(benefit.serviceName)){
        this.stateMandates.push(benefit.stateMandate);
        this.mandateBenefits.push(benefit.serviceName);
      }

      for (var network of benefit.networks){
        if (!this.benefitNetworkCodes.includes(network.networkCode)){
          this.benefitNetworkCodes.push(network.networkCode);
        }
      }
  // PlanCostSharing.planOOPMaximums

      //CostSharingSequence
      for (var seq of benefit.benefitCostsharing.sequences){
        for (var copay of seq.copays){
          this.copays.push(copay);
        }
        for (var oopMax of seq.oopMaximums){
          this.oopMaxs.push(oopMax);
        }
        for (var coinsurance of seq.coinsurances){
          this.coinsurances.push(coinsurance);
        }
      }

      //PlanCostSharing.planDeductibles, benefitCostSharing.deductibles
      for (var seq of benefit.benefitCostsharing.sequences){
        for (var deductible of seq.deductibles){
          this.deductibles.push(deductible);
        }
        for (var oopMax of seq.oopMaximums){
          this.oopMaxs.push(oopMax);
        }
        for (var coinsurance of seq.coinsurances){
          this.coinsurances.push(coinsurance);
        }
      }
    }
    //Deductible, OopMax, Coinsurance, LimitSequence, 
    //BenefitLimit, Indicator, Network
    for (var copay of this.copays){
      // + (string) converts to (number).
      if (copay.networkType == "OON")
        this.copayTiers[4].push(copay.amount + " copay ");
      else
        this.copayTiers[ (+ copay.networkTier) - 1].push(copay.amount + " copay ");
      
       if (copay.location != "" && !this.officeVisits[0].includes(copay.location)
            && copay.providerTier != ""){ //OffoiceVisit
          this.officeVisits[0].push(copay.location);
          var cur = "";
          if (copay.providerTier.includes("PCP"))
            cur += "PCP";
          if (copay.providerTier.includes("Spec")){
            if (cur == "")
              cur += "SPEC";
            else
              cur += "/SPEC";
          }
          this.officeVisits[1].push(cur);
      }
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

    // "coverageType": "Member",
  // "amount": "$16300",
  // "networkTier": "1",
  // "providerTier": "",
  // "providerTierCode": "0",
  // "location": "",
  // "networkType": "OON",

  
    for (var oopMax of this.oopMaxs){
      if (oopMax.coverageType == "Member" && oopMax.networkType == "IN")
        this.oopMaxDisplays[0] = oopMax.amount;
      else if (oopMax.coverageType == "Member" && oopMax.networkType == "OON")
        this.oopMaxDisplays[1] = oopMax.amount;
      else if (oopMax.coverageType == "Family" && oopMax.networkType == "IN")
        this.oopMaxDisplays[2] = oopMax.amount;
      else if (oopMax.coverageType == "Family" && oopMax.networkType == "OON")
        this.oopMaxDisplays[3] = oopMax.amount;
    }
    for (var coinsurance of this.coinsurances){
      if (coinsurance.networkType == "IN")
        this.coinsuranceInNetworkDisplays.push(coinsurance.amount + " coinsurance");
      else if (coinsurance.networkType == "OON")
      this.coinsuranceOutNetworkDisplays.push(coinsurance.amount + " coinsurance");
    }
    for (var unmappedAttribute of this.plan.unmappedAttributes){
      if (unmappedAttribute.name == "configNote"){
        this.configNotes.push(unmappedAttribute.value);
      }
    }
    this.indicators = this.plan.unmappedIndicators;

    for (var network of this.plan.networks){
      if (this.benefitNetworkCodes.includes(network.networkCode))
        this.benefitLevelNetworks.push(network);
      else
        this.planLevelNetworks.push(network);
    }
  }

  createRange(number){ //To be used as indices in *ngFor loops on HTML.
    var items: number[] = [];
    for(var i = 0; i < number; i++)
       items.push(i);
    return items;
  }

  colChange(colId: string): void{
    this.column[colId] = !this.column[colId];
  }
  expand(): void {
    for (var strId in this.column)
      this.column[strId] = true;
  }
  collapse(): void {
    for (var strId in this.column)
      this.column[strId] = false;
  }
}