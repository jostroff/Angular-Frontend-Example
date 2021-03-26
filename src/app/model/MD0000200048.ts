
import { Plan } from '../model/json_const';
export class MD0000200048 implements Plan
{
    // "plans": {
    "planInfo" = { //planVersion, legalEntity, priorApprovalResponsibilities, 
        //planEffectiveDate, glCorpCode, planRenewalDate, HSAQualifiedIndicator
        "planVersion": null,
        "legalEntity": null,
        "priorApprovalResponsibilities": null,
        "planEffectiveDate": null, 
        "glCorpCode": null,
        "planRenewalDate": null, 
        "HSAQualifiedIndicator": null,
        //Missing ^^ the 7 attributes above.

        "actuarialValue": null,
        "administrativePartnerCode": "",
        "administrativePartnerFunctionCode": null,
        "benefitLevel": "10",
        "benefitLevelName": "In-Network Deductible >= $1000 not HSA-qual",
        "buildType": "Prebuild",
        "businessLine": "Comprehensive Medical",
        "businessLineCode": "COM",
        "claimAdjudicationBeginDate": "01/01/2020",
        "coveragePeriodStartMonth": "JAN",
        "diabeticMandate": null,
        "exemptPlanReason": null,
        "insulinMandate": null,
        "pcpRestrictionNetworkCode": "",
        "legalEntityOON": null,
        "rxInfertilityDrugCoverageMax": null,
        "womensPreventiveCare": null,
        "groovyVersion": "3.0.7",
        "fundingArrangement": "Fully Insured",
        "hipaa271ProductCode": "HM",
        "hipaa835ProductCode": "HM",
        "hixPlanTypeCode": null,
        "initialClaimAdjudicationBeginDate": "01/01/2020",
        "jointVenturePartnerName": "Not Applicable",
        "legalEntities": [
            {
                "glCorpCode": "01",
                "legalEntityName": "Harvard Pilgrim Health Care, Inc."
            }
        ],
        "marketSegment": "Individual",
        "marketingName": "",
        "mccCompliance": "Compliant",
        "mccComplianceCode": "M001",
        "metalTierLevel": null,
        "networkID": null,
        "noReferralAdjudicationPolicy": "",
        "planID": "MD0000200048",
        "planType": "HMO",
        "planVertical": "MEDICAL",
        "priorApprovals": [
            {
                "networkType": "IN",
                "responsibility": ""
            },
            {
                "networkType": "OON",
                "responsibility": null
            }
        ],
        "productFamily": "",
        "productLine": "HMO",
        "productName": "",
        "productOffering": "",
        "productOfferingCode": "A067",
        "ratingState": "CT",
        "sellingPreferenceCode": "Open",
        "serviceID": null,
        "source": "eBS",
        "tierType": "Not Tiered",
        "tierTypeCode": "NT",
        "yearType": "Plan Year",
        "indicators": {
            "acaLargeGroupCompliance": null,
            "acaMandates": null,
            "basicMedicalDrugCoverage": null,
            "cusomizedContent": null,
            "dependentOOACoverage": "",
            "dependentOOAReferralWaive": "false",
            "ehbCompliance": null,
            "exemptPlan": "",
            "federalMentalHealthParity": "true",
            "hixQualifiedHealthPlan": null,
            "hsaQualified": "false",
            "internationalCoverageIncluded": "",
            "mccCompliant": "true",
            "noPCPRefINSpecialist": "false",
            "pcpRequired": "true",
            "rxInfertilityDrugCoverage": null,
            "studentDependentOOACoverage": "false",
            "studentDependentOOAReferralWaive": "false"
        },
        "versionInfo": {
            "createStamp": "2021-01-26T09:02:32.36",
            "createdBy": "Praveen.Porumalla",
            "planIteration": "0",
            "planVersion": "2021_1",
            "updateStamp": "2021-01-26T09:07:09.54",
            "updatedBy": "Praveen.Porumalla"
        }
    };
    "penalties" = [ //No "name" attribute. qualifierRule => penaltyQualifier.
        {
            // "name": "Penalty",
            "dollarAmount": null,
            "percentAmount": null,
            // "qualifierRule": null
            "penaltyQualifier": null
        }
    ];
    //unmappedAttributes, unmappedIndicators, planIntegrations, planCostSharing, benefits
    "networks" = [
    // {
        // "planNetworks": [
            {
                "networkCode": "NT00109",
                // "networkName": "Flex Labs",
                "networkTier": "1",
                "networkType": "IN",
                // "authRequiredForAccessToNetwork": "N/A",
                // "dependentOOANoPriorApprovalRequired": "No"
                "unmappedAttributes": null, //Added
                "unmappedIndicators": null //Added
            },
            {
                "networkCode": "NT00110",
                // "networkName": "Flex Ambulatory Surgery Centers",
                "networkTier": "1",
                "networkType": "IN",
                // "authRequiredForAccessToNetwork": "N/A",
                // "dependentOOANoPriorApprovalRequired": "No"
                "unmappedAttributes": null, //Added
                "unmappedIndicators": null //Added
            },
            {
                "networkCode": "NT00111",
                // "networkName": "Flex General Network",
                "networkTier": "1",
                "networkType": "IN",
                // "authRequiredForAccessToNetwork": "N/A",
                // "dependentOOANoPriorApprovalRequired": "No"
                "unmappedAttributes": null, //Added
                "unmappedIndicators": null //Added
            }
        // ],
        ];
        "benefitNetworks": [
            {
                "networkCode": "NT00026",
                // "networkName": "All Providers",
                "networkTier": "1",
                "networkType": "IN",
                // "authRequiredForAccessToNetwork": "N/A",
                // "dependentOOANoPriorApprovalRequired": "No"
                "unmappedAttributes": null, //Added
                "unmappedIndicators": null //Added
            },
            {
                "networkCode": "NT00022",
                // "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                "networkTier": "1",
                "networkType": "IN",
                // "authRequiredForAccessToNetwork": "N/A",
                // "dependentOOANoPriorApprovalRequired": "No"
                "unmappedAttributes": null, //Added
                "unmappedIndicators": null //Added
            }
        ]
    // };
    ;
    //Should be capital planCostsharing => planCostSharing
    "planCostsharing" = {
        "planDeductibles": [
            {
                "name": "$2,000.00 IN Member",
                "costShareLevel": "1",
                "unit": "Dollar",
                "amount": "2000",
                "applicableNetworkLevels": [
                    "1"
                ],
                "applicableNetworks": [
                    
                ],
                "applicableNetworkTypes": [
                    "IN"
                ],
                "coverageLevel": "Member",
                "yearType": "Plan Year",
                "accumulatesFromNetworkLevels": [
                    
                ],
                "accumulatesFromNetworkTypes": [
                    
                ],
                "carryOver": "N/A",
                "carryOverUnits": "N/A",
                "deductibleCredit": "N/A",
                "embedded": "true",
                "appliesToOOPMax": "true",
                "isBenefitSpecific": "false"
            },
            {
                "name": "$4,000.00 IN Family",
                "costShareLevel": "1",
                "unit": "Dollar",
                "amount": "4000",
                "applicableNetworkLevels": [
                    "1"
                ],
                "applicableNetworks": [
                    
                ],
                "applicableNetworkTypes": [
                    "IN"
                ],
                "coverageLevel": "Family",
                "yearType": "Plan Year",
                "accumulatesFromNetworkLevels": [
                    
                ],
                "accumulatesFromNetworkTypes": [
                    
                ],
                "carryOver": "N/A",
                "carryOverUnits": "N/A",
                "deductibleCredit": "N/A",
                "embedded": "true",
                "appliesToOOPMax": "true",
                "isBenefitSpecific": "false"
            }
        ],
        "planOOPMaximums": [
            {
                "name": "$6,500.00 IN Member",
                "unit": "Out Of Pocket Maximum",
                "amount": "6500",
                "applicableNetworkLevels": [
                    "1"
                ],
                "applicableNetworks": [
                    
                ],
                "applicableNetworkTypes": [
                    "IN"
                ],
                "coverageLevel": "Member",
                "yearType": "Plan Year",
                "accumulatesFromNetworkLevels": [
                    
                ],
                "accumulatesFromNetworkTypes": [
                    
                ],
                "embedded": "true"
            },
            {
                "name": "$13,000.00 IN Family",
                "unit": "Out Of Pocket Maximum",
                "amount": "13000",
                "applicableNetworkLevels": [
                    "1"
                ],
                "applicableNetworks": [
                    
                ],
                "applicableNetworkTypes": [
                    "IN"
                ],
                "coverageLevel": "Family",
                "yearType": "Plan Year",
                "accumulatesFromNetworkLevels": [
                    
                ],
                "accumulatesFromNetworkTypes": [
                    
                ],
                "embedded": "true"
            }
        ]
    };
    "excludedServices" = [
        {
            "serviceCode": "SER0103",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "eVisits",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0023",
            "benefitCategory1": "Preventive Services/Pedi-Dental",
            "benefitCategory2": "Bitewing X-Rays 1 film",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0025",
            "benefitCategory1": "Preventive Services/Pedi-Dental",
            "benefitCategory2": "Bitewing X-Rays 2 films",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0027",
            "benefitCategory1": "Preventive Services/Pedi-Dental",
            "benefitCategory2": "Bitewing X-Rays 4 films",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0224",
            "benefitCategory1": "Preventive Services/Pedi-Dental",
            "benefitCategory2": "Occusal X-Rays",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0243",
            "benefitCategory1": "Preventive Services/Pedi-Dental",
            "benefitCategory2": "Pedi Dental Comprehensive Visit",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0245",
            "benefitCategory1": "Preventive Services/Pedi-Dental",
            "benefitCategory2": "Pedi Dental Visit",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0247",
            "benefitCategory1": "Preventive Services/Pedi-Dental",
            "benefitCategory2": "Pediatric Preventive Dental Care",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0248",
            "benefitCategory1": "Preventive Services/Pedi-Dental",
            "benefitCategory2": "Periapical X-Rays",
            "benefitCategory3": ""
        },
        {
            "serviceCode": "SER0105",
            "benefitCategory1": "Telemedicine",
            "benefitCategory2": "eVisits - Medical",
            "benefitCategory3": ""
        }
    ];
    "coveredServices": [
        {
            "serviceCode": "SER0372",
            "benefitCategory1": "Childbirth Classes",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "1 Initial Childbirth course Member",
                    "amount": "1",
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "",
                    "coverageRangeCounterStops": "",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        
                    ],
                    "limitPers": [
                        "Pregnancy",
                        "Member"
                    ]
                },
                {
                    "name": "1 Refresher Childbirth course Member",
                    "amount": "1",
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "",
                    "coverageRangeCounterStops": "",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        
                    ],
                    "limitPers": [
                        "Pregnancy",
                        "Member"
                    ]
                }
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0006",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Rehabilitation",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "60 Days Member",
                    "amount": "60",
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "",
                    "coverageRangeCounterStops": "",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "Year",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0299",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Skilled Nursing Facility",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "100 Days Member",
                    "amount": "100",
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "",
                    "coverageRangeCounterStops": "",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "Year",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0118",
            "benefitCategory1": "Preventive Services/Routine Eye Exams",
            "benefitCategory2": "Eye Exams Routine (adult & child)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "1 Exam Member",
                    "amount": "1",
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "",
                    "coverageRangeCounterStops": "",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "Year",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0011",
            "benefitCategory1": "Allergy",
            "benefitCategory2": "Allergy Injections",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": {
                "name": "$10.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "10",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0013",
            "benefitCategory1": "Allergy",
            "benefitCategory2": "Allergy Serum",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0095",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Emergency Inpatient Admissions",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00026",
                    "networkName": "All Providers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00026 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00026",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0097",
            "benefitCategory1": "Emergency Outpatient",
            "benefitCategory2": "Emergency Room Services",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00026",
                    "networkName": "All Providers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": {
                "name": "$500.00 IN NT00026 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "500",
                "applicableNetworkCodes": [
                    "NT00026",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0098",
            "benefitCategory1": "Emergency Outpatient",
            "benefitCategory2": "Emergency Room Services",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00026",
                    "networkName": "All Providers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0131",
            "benefitCategory1": "Wellness Benefit",
            "benefitCategory2": "Fitness Facility & Tracker - Option 2",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0391",
            "benefitCategory1": "Genetic Testing",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0266",
            "benefitCategory1": "Genetic Testing",
            "benefitCategory2": "Preimplantation Genetic Diagnosis Testing MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0154",
            "benefitCategory1": "Home Health Care",
            "benefitCategory2": "HHC Medical and Surgical Supplies",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0156",
            "benefitCategory1": "Home Health Care",
            "benefitCategory2": "High Tech Home Infusion",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0160",
            "benefitCategory1": "Home Health Care",
            "benefitCategory2": "Home Health Care - DME",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0393",
            "benefitCategory1": "Home Health Care MA",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0001",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Acute",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0068",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Detoxification",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0132",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Gender Reassignment Surgery",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0004",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Maternity",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0203",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Mental Health Licensed General Hospital",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0204",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Mental Health Psych Hosp Svs (State Mandated Dx)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0205",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Mental Health Psychiatric Hospital Services",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0210",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Newborn Nursery Non-Routine",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0212",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Newborn Nursery Routine - Non-PPACA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0002",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Acute",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0005",
            "benefitCategory1": "Inpatient",
            "benefitCategory2": "Maternity",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0187",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "Intermediate Services",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0403",
            "benefitCategory1": "Low Protein Foods MA",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0458",
            "benefitCategory1": "Medical Formulas MA",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0460",
            "benefitCategory1": "Medical Formulas ME",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0186",
            "benefitCategory1": "Medical Drugs/Injectables",
            "benefitCategory2": "Injectable and Oral Medications (received in home)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0031",
            "benefitCategory1": "Chemo/Radiation",
            "benefitCategory2": "Chemo Injectable and Oral Medications",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0184",
            "benefitCategory1": "Medical Drugs/Injectables",
            "benefitCategory2": "Injectable and Oral Medications (physicians office or outpatient facility)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0192",
            "benefitCategory1": "Medical Drugs/Injectables",
            "benefitCategory2": "Lipodystrophy MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0029",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Breast Prostheses and Mastectomy Bras",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0058",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Continuous Glucose Monitors",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0087",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "DME",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0089",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "DME Unspecified",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0073",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Diabetes Supplies and Equipment",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0078",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Diabetic Shoes-Inserts",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0145",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Hearing Aids MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0147",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Hearing Aids ME",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0227",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Orthotics",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0229",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Ostomy Supplies",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0276",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Prosthetic Arms & Legs",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0278",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Prosthetic Arms and Legs - Fittings and Supplies",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0280",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Prosthetic Devices",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0351",
            "benefitCategory1": "Medical Equipment, Devices and Supplies",
            "benefitCategory2": "Wigs MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0207",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "Methadone Maintenance",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0384",
            "benefitCategory1": "Early Intervention MA",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0092",
            "benefitCategory1": "Emergency Outpatient",
            "benefitCategory2": "Emergency Dental",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0018",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "Autism - ABA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0137",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "Group Therapy",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN NT00022 Member Group",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0166",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "Individual Therapy",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN NT00022 Member Individual",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0230",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "Outpatient Detoxification",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0344",
            "benefitCategory1": "Urgent Care",
            "benefitCategory2": "Walk-In Clinic- Location 17",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0072",
            "benefitCategory1": "Urgent Care",
            "benefitCategory2": "Diabetes Self Management at Location 20",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": {
                "name": "$70.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "70",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0069",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Diabetes Self Management",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0117",
            "benefitCategory1": "Urgent Care",
            "benefitCategory2": "Eye Exams Diabetic at Location 20",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": {
                "name": "$70.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "70",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0114",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Eye Exams Diabetic",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0134",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Genetic Counseling",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0162",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "House Calls",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0447",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Infertility Consults and Evals MA",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0220",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Nutritional Counseling",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0273",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Prenatal Pediatric Visits",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0288",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Radiology Evaluation and Management",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0292",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Sick Or Injured Care",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0296",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Sick Or Injured Care Custodial",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0316",
            "benefitCategory1": "Urgent Care",
            "benefitCategory2": "TMD Consults at Location 20",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": {
                "name": "$70.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "70",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0313",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "TMD Consults",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0202",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "Medication Management",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0075",
            "benefitCategory1": "Routine Diabetic Foot Care",
            "benefitCategory2": "Diabetic Foot Care",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member Level 1",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0111",
            "benefitCategory1": "Urgent Care",
            "benefitCategory2": "Eye Care Non-Routine at Location 20",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": {
                "name": "$70.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "70",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0222",
            "benefitCategory1": "Observation Care",
            "benefitCategory2": "Observation Room Care",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00026",
                    "networkName": "All Providers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00026 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00026",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0208",
            "benefitCategory1": "Consults/Evals",
            "benefitCategory2": "Neuropsych Testing",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0014",
            "benefitCategory1": "Other Diagnostic Services",
            "benefitCategory2": "Allergy Tests",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0016",
            "benefitCategory1": "Other Diagnostic Services",
            "benefitCategory2": "Audiology Tests",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0080",
            "benefitCategory1": "Other Diagnostic Services",
            "benefitCategory2": "Diagnostic Services",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0112",
            "benefitCategory1": "Other Diagnostic Services",
            "benefitCategory2": "Eye Exams Corneal Testing",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0152",
            "benefitCategory1": "Other Diagnostic Services",
            "benefitCategory2": "Hearing Tests",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0301",
            "benefitCategory1": "Other Diagnostic Services",
            "benefitCategory2": "Sleep Studies",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0281",
            "benefitCategory1": "Outpatient Behavioral Health",
            "benefitCategory2": "Psychological/Neuro-psych Testing",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00022",
                    "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00022 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00022",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0361",
            "benefitCategory1": "Administration of Injections",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0033",
            "benefitCategory1": "Chemo/Radiation",
            "benefitCategory2": "Chemotherapy Administration",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0282",
            "benefitCategory1": "Chemo/Radiation",
            "benefitCategory2": "Radiation Therapy",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0043",
            "benefitCategory1": "Dental",
            "benefitCategory2": "Cleft Palate MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0063",
            "benefitCategory1": "Dental",
            "benefitCategory2": "Dental Hyperplasia",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0065",
            "benefitCategory1": "Dental",
            "benefitCategory2": "Dental Medically Necessary",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0067",
            "benefitCategory1": "Dental",
            "benefitCategory2": "Dental Orthognathic",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0107",
            "benefitCategory1": "Dental",
            "benefitCategory2": "Extraction of Impacted Teeth",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0379",
            "benefitCategory1": "Dialysis",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0083",
            "benefitCategory1": "Dialysis",
            "benefitCategory2": "Dialysis Equipment",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0085",
            "benefitCategory1": "Dialysis",
            "benefitCategory2": "Dialysis Infusion Pump",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0159",
            "benefitCategory1": "Dialysis",
            "benefitCategory2": "Home Dialysis Installation",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0169",
            "benefitCategory1": "Infertility Treatment",
            "benefitCategory2": "Infertility ART MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0179",
            "benefitCategory1": "Infertility Treatment",
            "benefitCategory2": "Infertility TDI MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0231",
            "benefitCategory1": "Outpatient Hospice",
            "benefitCategory2": "Outpatient Hospice Services",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0214",
            "benefitCategory1": "Outpatient Surgical Procedures & Treatments",
            "benefitCategory2": "Non-SDC Surgical Procedures",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0237",
            "benefitCategory1": "Outpatient Surgical Procedures & Treatments",
            "benefitCategory2": "Pain Management",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0317",
            "benefitCategory1": "Outpatient Surgical Procedures & Treatments",
            "benefitCategory2": "TMD Surgery",
            "benefitCategory3": "Level 2 Facility",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0311",
            "benefitCategory1": "Therapeutic Treatments",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0056",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Contact Lens Fitting",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0188",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Keratoconus Contact Lenses",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0190",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Keratoconus Contact Lenses (Rx Change)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0250",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Post Cataract Surgery with Lens Implant",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0252",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Post Cataract Surgery with Lens Implant (Rx Change)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0254",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Post Cataract Surgery without Lens Implant",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0256",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Post Cataract Surgery without Lens Implant (Rx Change)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0258",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Post Retinal Detachment Surgery (No Prior Vision Hardware)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0260",
            "benefitCategory1": "Vision Hardware for Special Conditions",
            "benefitCategory2": "Post Retinal Detachment Surgery (Prior Vision Hardware)",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0336",
            "benefitCategory1": "Voluntary Sterilization (non-FHCR)",
            "benefitCategory2": "Voluntary Sterilization - Males",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0422",
            "benefitCategory1": "Voluntary Termination of Pregnancy",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0060",
            "benefitCategory1": "Oxygen & Respiratory",
            "benefitCategory2": "CPAP BIPAP Supplies",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0233",
            "benefitCategory1": "Oxygen & Respiratory",
            "benefitCategory2": "Oxygen and Respiratory Care Equipment",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0235",
            "benefitCategory1": "Oxygen & Respiratory",
            "benefitCategory2": "Oxygen and Respiratory Care Equipment - HMO 90 days OON",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0359",
            "benefitCategory1": "Additional Preventive Services",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0399",
            "benefitCategory1": "Immunization",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0413",
            "benefitCategory1": "Preventive Services (FHCR)",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0263",
            "benefitCategory1": "Preventive Services/Maternity",
            "benefitCategory2": "Postpartum Home Visits",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0271",
            "benefitCategory1": "Preventive Services/Maternity",
            "benefitCategory2": "Prenatal and Postpartum Care",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0291",
            "benefitCategory1": "Preventive Services/Routine Physical Exams",
            "benefitCategory2": "Routine Physical Exams\n\nDriven by PPACA DX",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0035",
            "benefitCategory1": "Chiropractic Care",
            "benefitCategory2": "Chiropractic X-Rays",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0417",
            "benefitCategory1": "Radiology",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0322",
            "benefitCategory1": "Radiology",
            "benefitCategory2": "TMD X-Rays",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0420",
            "benefitCategory1": "Surgery Supplies",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0310",
            "benefitCategory1": "Telephonic Eval",
            "benefitCategory2": "Telephonic Evaluation Management",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0303",
            "benefitCategory1": "Telemedicine",
            "benefitCategory2": "Telemedicine Transmission and Equipment",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0305",
            "benefitCategory1": "Telemedicine",
            "benefitCategory2": "Telemedicine Virtual Visit - Behavioral Health",
            "benefitCategory3": "",
            "networkTier": "OON",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": "N/A",
            "famDeductible": "N/A",
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0306",
            "benefitCategory1": "Telemedicine",
            "benefitCategory2": "Telemedicine Virtual Visit - Medical",
            "benefitCategory3": "Level 1 Provider",
            "networkTier": "OON",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": "N/A",
            "famDeductible": "N/A",
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0307",
            "benefitCategory1": "Telemedicine",
            "benefitCategory2": "Telemedicine Virtual Visit - Medical",
            "benefitCategory3": "Level 2 Provider",
            "networkTier": "OON",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": "N/A",
            "famDeductible": "N/A",
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SER0325",
            "benefitCategory1": "Transportation",
            "benefitCategory2": "Transport Emergency",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00026",
                    "networkName": "All Providers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00026 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00026",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0327",
            "benefitCategory1": "Transportation",
            "benefitCategory2": "Transport Non-Emergency",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00026",
                    "networkName": "All Providers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00026 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00026",
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0450",
            "benefitCategory1": "Urgent Care",
            "benefitCategory2": "Infertility Consults and Evals at Location 20 MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": {
                "name": "$70.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "70",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0295",
            "benefitCategory1": "Urgent Care",
            "benefitCategory2": "Sick or Injured Care at Location 20",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": {
                "name": "$70.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "70",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0329",
            "benefitCategory1": "Urgent Care",
            "benefitCategory2": "Urgent Care Hospital",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": {
                "name": "$70.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "70",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SER0345",
            "benefitCategory1": "Wellness Benefit",
            "benefitCategory2": "Weight Watchers",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0001",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "CT Scans",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0009",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "CT Scans TMD",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0004",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "CT Scans",
            "benefitCategory3": "Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member hospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family hospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0006",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "CT Scans",
            "benefitCategory3": "Non-Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member nonHospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family nonHospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0002",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "CT Scans",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0005",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "CT Scans",
            "benefitCategory3": "Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member hospital",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family hospital",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0007",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "CT Scans",
            "benefitCategory3": "Non-Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member nonHospital",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family nonHospital",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0017",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "High End Mammograms",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0020",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "High End Mammograms",
            "benefitCategory3": "Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member hospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family hospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0022",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "High End Mammograms",
            "benefitCategory3": "Non-Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member nonHospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family nonHospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0025",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "MRI",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0028",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "MRI",
            "benefitCategory3": "Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member hospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family hospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0030",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "MRI",
            "benefitCategory3": "Non-Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member nonHospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family nonHospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0041",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "PET Scans",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0044",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "PET Scans",
            "benefitCategory3": "Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member hospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family hospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0046",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "PET Scans",
            "benefitCategory3": "Non-Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member nonHospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family nonHospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0049",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "SPECT",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0052",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "SPECT",
            "benefitCategory3": "Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member hospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family hospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0054",
            "benefitCategory1": "Advanced Radiology",
            "benefitCategory2": "SPECT",
            "benefitCategory3": "Non-Hospital Based - Spec Loc",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member nonHospital H1_H2",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family nonHospital H1_H2",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0110",
            "benefitCategory1": "Day Surgery",
            "benefitCategory2": "",
            "benefitCategory3": "Non-Preferred Provider MA",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00109 NT00111 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00111",
                    "NT00110"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN NT00109 NT00111 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00111",
                    "NT00110"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN NT00109 NT00111 Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00111",
                    "NT00110"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0114",
            "benefitCategory1": "Day Surgery",
            "benefitCategory2": "",
            "benefitCategory3": "Preferred Provider MA",
            "networkTier": "IN",
            "coverageType": "Copay Only",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": {
                "name": "$150.00 IN NT00110 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "150",
                "applicableNetworkCodes": [
                    "NT00110",
                    "NT00109",
                    "NT00111"
                ],
                "limitPer": [
                    "Member",
                    "Per Visit"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN NT00110 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    "NT00110",
                    "NT00109",
                    "NT00111"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN NT00110 Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    "NT00110",
                    "NT00109",
                    "NT00111"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0103",
            "benefitCategory1": "Day Surgery",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0259",
            "benefitCategory1": "Anesthesia Outpatient",
            "benefitCategory2": "",
            "benefitCategory3": "Non-Preferred Provider MA",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0260",
            "benefitCategory1": "Anesthesia Outpatient",
            "benefitCategory2": "",
            "benefitCategory3": "Preferred Provider MA",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0271",
            "benefitCategory1": "Anesthesia Outpatient",
            "benefitCategory2": "",
            "benefitCategory3": "for SoS BCAT1 option",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0253",
            "benefitCategory1": "Anesthesia Outpatient",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0257",
            "benefitCategory1": "Anesthesia Outpatient",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0258",
            "benefitCategory1": "Anesthesia Outpatient",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0304",
            "benefitCategory1": "Laboratory",
            "benefitCategory2": "Human Leukocyte Antigen Testing ME",
            "benefitCategory3": "for SoS BCAT1 option",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0249",
            "benefitCategory1": "Laboratory",
            "benefitCategory2": "Human Leukocyte Antigen Testing ME",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0217",
            "benefitCategory1": "Laboratory",
            "benefitCategory2": "",
            "benefitCategory3": "Non-Preferred Provider MA",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% IN NT00110 NT00111 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00110",
                    "NT00111",
                    "NT00109"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN NT00110 NT00111 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    "NT00110",
                    "NT00111",
                    "NT00109"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN NT00110 NT00111 Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    "NT00110",
                    "NT00111",
                    "NT00109"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0223",
            "benefitCategory1": "Laboratory",
            "benefitCategory2": "",
            "benefitCategory3": "Preferred Provider MA",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN NT00109 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN NT00109 Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0208",
            "benefitCategory1": "Laboratory",
            "benefitCategory2": "",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0084",
            "benefitCategory1": "Colonoscopy Non-Routine",
            "benefitCategory2": "Colonoscopy Non-Routine SDC",
            "benefitCategory3": "Non-Preferred Provider MA",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN NT00109 NT00111 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00111",
                    "NT00110"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN NT00109 NT00111 Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00111",
                    "NT00110"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0284",
            "benefitCategory1": "Colonoscopy Non-Routine",
            "benefitCategory2": "Colonoscopy Non-Routine Office & Outpatient",
            "benefitCategory3": "for SoS BCAT1 option",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0088",
            "benefitCategory1": "Colonoscopy Non-Routine",
            "benefitCategory2": "Colonoscopy Non-Routine SDC",
            "benefitCategory3": "Preferred Provider MA",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN NT00110 Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    "NT00110",
                    "NT00109",
                    "NT00111"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN NT00110 Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    "NT00110",
                    "NT00109",
                    "NT00111"
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0074",
            "benefitCategory1": "Colonoscopy Non-Routine",
            "benefitCategory2": "Colonoscopy Non-Routine Office & Outpatient",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "Deductible then Coinsurance",
            "deductibleType": "General",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": {
                "name": "20.00% Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "20",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0077",
            "benefitCategory1": "Colonoscopy Non-Routine",
            "benefitCategory2": "Colonoscopy Non-Routine SDC",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": "N/A",
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0136",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Autism - OT",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0137",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Autism - OT",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0140",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Autism - PT",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0141",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Autism - PT",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0135",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Autism - OT",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0139",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Autism - PT",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0147",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Cardiac Rehabilitation",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0154",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy - Habilitative",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0155",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy - Habilitative",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0153",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy - Habilitative",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0158",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy - Rehabilitative",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0159",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy - Rehabilitative",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0157",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy - Rehabilitative",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0162",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy Evaluations",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0163",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy Evaluations",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0178",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy Evaluations",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0179",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy Evaluations",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0200",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Speech Therapy Evaluations",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0201",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Speech Therapy Evaluations",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0161",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Occupational Therapy Evaluations",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0177",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy Evaluations",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0199",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Speech Therapy Evaluations",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0170",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy - Habilitative",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0171",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy - Habilitative",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0169",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy - Habilitative",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0174",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy - Rehabilitative",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0175",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy - Rehabilitative",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0173",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Physical Therapy - Rehabilitative",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0181",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Pulmonary Rehabilitation Therapy",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        },
        {
            "serviceCode": "SPL0184",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Speech Therapy MA",
            "benefitCategory3": "Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0185",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Speech Therapy MA",
            "benefitCategory3": "Non-Hospital Based - Claim Form",
            "networkTier": "IN",
            "coverageType": "",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                
            ],
            "sequence": 1,
            "copay": "N/A",
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": {
                "name": "$6,500.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "6500",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            },
            "famOOPMax": {
                "name": "$13,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "13000",
                "applicableNetworkCodes": [
                    
                ],
                "embedded": "true"
            }
        },
        {
            "serviceCode": "SPL0183",
            "benefitCategory1": "Functional Therapy",
            "benefitCategory2": "Speech Therapy MA",
            "benefitCategory3": "",
            "networkTier": "IN",
            "coverageType": "No Cost",
            "deductibleType": "Not Applicable",
            "rxTier": "N/A",
            "networks": [
                {
                    "networkCode": "NT00109",
                    "networkName": "Flex Labs",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00110",
                    "networkName": "Flex Ambulatory Surgery Centers",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                },
                {
                    "networkCode": "NT00111",
                    "networkName": "Flex General Network",
                    "networkTier": "1",
                    "networkType": "IN",
                    "authRequiredForAccessToNetwork": "N/A",
                    "dependentOOANoPriorApprovalRequired": "No"
                }
            ],
            "limits": [
                {
                    "name": "Visit 1 through 1 Member",
                    "amount": null,
                    "coverageLevel": "Member",
                    "coverageRangeCounterStarts": "1",
                    "coverageRangeCounterStops": "1",
                    "coverageRangeFromAge": null,
                    "coverageRangeToAge": null,
                    "timePeriods": [
                        {
                            "unit": "PlanYear",
                            "value": "1"
                        }
                    ],
                    "limitPers": [
                        "Member"
                    ]
                }
            ],
            "sequence": 1,
            "copay": {
                "name": "$0.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "0",
                "applicableNetworkCodes": [
                    "NT00109",
                    "NT00110",
                    "NT00111"
                ],
                "limitPer": [
                    "Member"
                ],
                "applyToOOPMax": null,
                "applyAfterOOPMax": null,
                "applyToDeduct": null
            },
            "coinsurance": "N/A",
            "indDeductible": {
                "name": "$2,000.00 IN Member",
                "coverageLevel": "Member",
                "networkTier": "INN",
                "amount": "2000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "famDeductible": {
                "name": "$4,000.00 IN Family",
                "coverageLevel": "Family",
                "networkTier": "INN",
                "amount": "4000",
                "applicableNetworkCodes": [
                    
                ],
                "carryOver": null,
                "deductibleCredit": "Not Applicable",
                "applyToOOPMax": "True",
                "applyAfterOOPMax": null,
                "embedded": "true"
            },
            "indOOPMax": "N/A",
            "famOOPMax": "N/A"
        }
    ]


    //Newly added, just for now.
    ;
    "unmappedAttributes": null;
    "unmappedIndicators": null;
    "planIntegrations": null;
    "planCostSharing": null;
    "benefits": null;
}
// }