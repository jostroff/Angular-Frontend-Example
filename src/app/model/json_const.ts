export class Plan_5219 implements Plan
{   
    //NOTE: Several things I had to change in the below JSON from the
    //      original. First, all attributes start with "name" = {...}
    //      rather than "name" : {}, at least for the first attributes
    //      to correctly show in the variables' HTML table bindings.
    //  ALSO Used unmappedAttributes = [{}], which should be [].
    //  The largest section. Probably the most chaotic and scalable one.
    //  ALSO last deductible in deductibles was missing "providerTierCode" : "0"
    //  ALSO add coverageLevel: string to Accumulator class under planIntegrations,
    //      sharedAccumulators.
    "planInfo" = { 
        "productFamily": "Best Buy Tiered Copay",
        "tierType": "Tiered Copay",
        "hipaa271ProductCode": "PR",
        "planVersion": "B02",
        "sellingPreferenceCode": "Market Specific",
        "tierTypeCode": "T2",
        "productName": "CT PPO-Best Buy Tiered Copay",
        "legalEntity": "HPHC Insurance Company",
        "productLine": "PPO",
        "businessLineCode": "COM",
        "productOfferingCode": "A031",
        "hipaa835ProductCode": "12",
        "mccComplianceCode": "None",
        "initialClaimAdjudicationBeginDate": "2020-01-01",
        "priorApprovalResponsibilities": [
            {
                "responsibleParty": "Provider",
                "networkType": "IN"
            },
            {
                "responsibleParty": "Member",
                "networkType": "OON"
            }
        ],
        "marketSegment": "Small",
        "planType": "planType",
        "mccCompliance": "No MCC determination",
        "productOffering": "HPHC Insurance Company PPO",
        "claimAdjudicationBeginDate": "2020-01-01",
        "coveragePeriodStartMonth": "JAN",
        "fundingArrangement": "Fully Insured",
        "noReferralAdjudicationPolicy": "N/A",
        "yearType": "Plan",
        "ratingState": "CT",
        "businessLine": "Comprehensive Medical",
        "planEffectiveDate": "2019-06-01",
        "planVertical": "MEDICAL",
        "planID": "MD0000005219",
        "glCorpCode": "44",
        "planRenewalDate": "2021-01-01",
        "HSAQualifiedIndicator": "false"
    };
    "unmappedAttributes" = [
        {
            "name": "buildType",
            "value": "Prebuild"
        },
        {
            "name": "configNote",
            "value": "Please note, members enrolled in this CT plan that reside in NH are eligible for coverage of Bariatric Surgery with HPHC approval."
        }
    ];
    "unmappedIndicators" = [
        {
            "name": "ExemptPlan",
            "value": false
        },
        {
            "name": "PCPRequired",
            "value": false
        },
        {
            "name": "NoPCPRefINSpecialist",
            "value": false
        },
        {
            "name": "FederalMentalHealthParity",
            "value": true
        },
        {
            "name": "MccCompliant",
            "value": true
        },
        {
            "name": "BehavioralHealthCoverage",
            "value": true
        },
        {
            "name": "StudentDepOOACoverage",
            "value": false
        },
        {
            "name": "StudentDepOOARefWaive",
            "value": false
        },
        {
            "name": "dependentOOACoverage",
            "value": false
        },
        {
            "name": "dependentOOAReferralWaive",
            "value": false
        }
    ];
    "planIntegrations" = [
        {
            "soldTogether": true,
            "integratedPlanType": "BEHAVIORAL",
            "sharedAccumulators": [
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "OON",
                    "isShared": true
                },
                {
                    "accumulatorType": "deductible",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "deductible",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "OON",
                    "isShared": true
                },
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "OON",
                    "isShared": true
                },
                {
                    "accumulatorType": "deductible",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "deductible",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "OON",
                    "isShared": true
                }
            ]
        },
        {
            "soldTogether": true,
            "integratedPlanType": "DENTAL",
            "sharedAccumulators": [
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "OON",
                    "isShared": true
                },
                {
                    "accumulatorType": "deductible",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "deductible",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "OON",
                    "isShared": true
                },
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "OON",
                    "isShared": true
                },
                {
                    "accumulatorType": "deductible",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "deductible",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "OON",
                    "isShared": true
                }
            ]
        },
        {
            "soldTogether": true,
            "integratedPlanType": "PHARMACY",
            "sharedAccumulators": [
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                }
            ]
        },
        {
            "soldTogether": true,
            "integratedPlanType": "VISION",
            "sharedAccumulators": [
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Member",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                },
                {
                    "accumulatorType": "oopMaximum",
                    "coverageLevel": "Family",
                    "networkTier": "",
                    "networkType": "IN",
                    "isShared": true
                }
            ]
        }
    ];
    "networks" = [
        {
            "networkTier": "1",
            "networkCode": "NT00066",
            "networkName": "UHC Options Out of Area National Network",
            "networkType": "OOA",
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "networkTier": "1",
            "networkCode": "NT00001",
            "networkName": "Core Network",
            "networkType": "IN",
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "networkTier": "1",
            "networkCode": "NT00021",
            "networkName": "WholeHealth Acupuncture Network",
            "networkType": "IN",
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "networkTier": "1",
            "networkCode": "NT00026",
            "networkName": "All Providers",
            "networkType": "IN",
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "networkTier": "1",
            "networkCode": "NT00022",
            "networkName": "OptumHealth Behavioral Solutions (UBH) Network",
            "networkType": "IN",
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "networkTier": "1",
            "networkCode": "",
            "networkName": "Out Of Network",
            "networkType": "OON",
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        }
    ];
    "penalties" = [
        {
            "dollarAmount": "$500",
            "percentAmount": "50%",
            "penaltyQualifier": "Lesser"
        }
    ];
    "planCostSharing" = {
        "planCoinsurances": [
            {
                "amount": "50%",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "11,20,21,22,23,24,31,41,61",
                "networkType": "IN",
                "unmappedIndicators": [
                    {
                        "name": "applyAfterOOP",
                        "value": false
                    },
                    {
                        "name": "applyToDeduct",
                        "value": false
                    },
                    {
                        "name": "applyToOOP",
                        "value": true
                    },
                    {
                        "name": "maxBenefit",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            },
            {
                "amount": "50%",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "11,20,21,22,23,24,31,41,61",
                "networkType": "OON",
                "unmappedIndicators": [
                    {
                        "name": "applyAfterOOP",
                        "value": false
                    },
                    {
                        "name": "applyToDeduct",
                        "value": false
                    },
                    {
                        "name": "applyToOOP",
                        "value": true
                    },
                    {
                        "name": "maxBenefit",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            }
        ],
        "planOOPMaximums": [
            {
                "coverageType": "Member",
                "amount": "$8150",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "",
                "networkType": "IN",
                "unmappedIndicators": [
                    {
                        "name": "embedded",
                        "value": true
                    },
                    {
                        "name": "consecutive",
                        "value": false
                    },
                    {
                        "name": "unlimitedLimit",
                        "value": false
                    },
                    {
                        "name": "applyPriorMemberCostShare",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            },
            {
                "coverageType": "Family",
                "amount": "$16300",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "",
                "networkType": "IN",
                "unmappedIndicators": [
                    {
                        "name": "embedded",
                        "value": true
                    },
                    {
                        "name": "consecutive",
                        "value": false
                    },
                    {
                        "name": "unlimitedLimit",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            },
            {
                "coverageType": "Member",
                "amount": "$16300",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "",
                "networkType": "OON",
                "unmappedIndicators": [
                    {
                        "name": "embedded",
                        "value": true
                    },
                    {
                        "name": "consecutive",
                        "value": false
                    },
                    {
                        "name": "unlimitedLimit",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            },
            {
                "coverageType": "Family",
                "amount": "$32600",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "",
                "networkType": "OON",
                "unmappedIndicators": [
                    {
                        "name": "embedded",
                        "value": true
                    },
                    {
                        "name": "consecutive",
                        "value": false
                    },
                    {
                        "name": "unlimitedLimit",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            }
        ],
        "planDeductibles": [
            {
                "coverageType": "Member",
                "amount": "$4000",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "",
                "networkType": "IN",
                "unmappedIndicators": [
                    {
                        "name": "applyToOOPMax",
                        "value": true
                    },
                    {
                        "name": "embedded",
                        "value": true
                    },
                    {
                        "name": "maxBenefit",
                        "value": false
                    },
                    {
                        "name": "benefitSpecificDeductible",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            },
            {
                "coverageType": "Family",
                "amount": "$8000",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "",
                "networkType": "IN",
                "unmappedIndicators": [
                    {
                        "name": "applyToOOPMax",
                        "value": true
                    },
                    {
                        "name": "embedded",
                        "value": true
                    },
                    {
                        "name": "maxBenefit",
                        "value": false
                    },
                    {
                        "name": "benefitSpecificDeductible",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            },
            {
                "coverageType": "Member",
                "amount": "$8000",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "",
                "networkType": "OON",
                "unmappedIndicators": [
                    {
                        "name": "applyToOOPMax",
                        "value": true
                    },
                    {
                        "name": "embedded",
                        "value": true
                    },
                    {
                        "name": "maxBenefit",
                        "value": false
                    },
                    {
                        "name": "benefitSpecificDeductible",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    
                ]
            },
            {
                "coverageType": "Family",
                "amount": "$16000",
                "networkTier": "1",
                "providerTier": "",
                "providerTierCode": "0",
                "location": "",
                "networkType": "OON",
                "unmappedIndicators": [
                    {
                        "name": "applyToOOPMax",
                        "value": true
                    },
                    {
                        "name": "embedded",
                        "value": true
                    },
                    {
                        "name": "maxBenefit",
                        "value": false
                    },
                    {
                        "name": "benefitSpecificDeductible",
                        "value": false
                    }
                ],
                "unmappedAttributes": [
                    //Used to be {}. Didn't work though.
                ]
            }
        ]
    }; //Used unmappedAttributes = [{}], which should be [].
    //The largest section. Probably the most chaotic and scalable one.
    "benefits" = [
        {
            "serviceCode": "SER0019",
            "benefitCategory": "Inpatient",
            "serviceName": "Bariatric Surgery",
            "serviceProviderCategory": "",
            "placeOfService": "Facility",
            "costshareGroupingName": "Inpatient Facility",
            "costshareOrder": "Deductible,Copay,Coinsurance",
            "costshareRegimeIN": "Excluded",
            "costshareRegimeINCode": "NOCOVER_001",
            "costshareRegimeOON": "Excluded",
            "costshareRegimeOONCode": "NOCOVER_001",
            "stateMandate": "MA",
            "isExcluded": "true",
            "locationCode": "",
            "networks": [
                
            ],
            "penalties": [
                
            ],
            "benefitLimits": {
                "limits": [
                    
                ],
                "sequences": [
                    
                ]
            },
            "benefitCostsharing": {
                "coinsurances": [
                    
                ],
                "copays": [
                    
                ],
                "oopMaximums": [
                    
                ],
                "deductibles": [
                    
                ],
                "sequences": [
                    
                ]
            },
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "serviceCode": "SER0020",
            "benefitCategory": "Inpatient",
            "serviceName": "Bariatric Surgery",
            "serviceProviderCategory": "",
            "placeOfService": "Professional",
            "costshareGroupingName": "Inpatient Professional",
            "costshareOrder": "Deductible,Copay,Coinsurance",
            "costshareRegimeIN": "Excluded",
            "costshareRegimeINCode": "NOCOVER_001",
            "costshareRegimeOON": "Excluded",
            "costshareRegimeOONCode": "NOCOVER_001",
            "stateMandate": "",
            "isExcluded": "true",
            "locationCode": "",
            "networks": [
                
            ],
            "penalties": [
                
            ],
            "benefitLimits": {
                "limits": [
                    
                ],
                "sequences": [
                    
                ]
            },
            "benefitCostsharing": {
                "coinsurances": [
                    
                ],
                "copays": [
                    
                ],
                "oopMaximums": [
                    
                ],
                "deductibles": [
                    
                ],
                "sequences": [
                    
                ]
            },
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "serviceCode": "SER0140",
            "benefitCategory": "Medical Equipment, Devices and Supplies",
            "serviceName": "Hearing Aids",
            "serviceProviderCategory": "",
            "placeOfService": "Facility",
            "costshareGroupingName": "Medical Equipment, Devices and Supplies",
            "costshareOrder": "Deductible,Copay,Coinsurance",
            "costshareRegimeIN": "Deductible then Coinsurance",
            "costshareRegimeINCode": "PRD_DE_CN",
            "costshareRegimeOON": "Deductible then Coinsurnace",
            "costshareRegimeOONCode": "PRD_DE_CN",
            "stateMandate": "",
            "isExcluded": "false",
            "locationCode": "12",
            "networks": [
                {
                    "networkTier": "1",
                    "networkCode": "NT00001",
                    "networkName": "Core Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "NT00066",
                    "networkName": "UHC Options Out of Area National Network",
                    "networkType": "OOA",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "",
                    "networkName": "Out Of Network",
                    "networkType": "OON",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                }
            ],
            "penalties": [
                
            ],
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
                "sequences": [
                    
                ]
            },
            "benefitCostsharing": {
                "coinsurances": [
                    {
                        "amount": "50%",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "12",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    },
                    {
                        "amount": "50%",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "12",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "copays": [
                    
                ],
                "oopMaximums": [
                    {
                        "coverageType": "Member",
                        "amount": "$8150",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            },
                            {
                                "name": "applyPriorMemberCostShare",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$16300",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Member",
                        "amount": "$16300",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            },
                            {
                                "name": "applyPriorMemberCostShare",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$32600",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "deductibles": [
                    {
                        "coverageType": "Member",
                        "amount": "$4000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$8000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Member",
                        "amount": "$8000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$16000",
                        "networkTier": "1",
                        "providerTier": "0",
                        "providerTierCode": "0", //Missing.
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "sequences": [
                    
                ]
            },
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
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
            "networks": [
                {
                    "networkTier": "1",
                    "networkCode": "NT00001",
                    "networkName": "Core Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "NT00066",
                    "networkName": "UHC Options Out of Area National Network",
                    "networkType": "OOA",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "",
                    "networkName": "Out Of Network",
                    "networkType": "OON",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                }
            ],
            "penalties": [
                
            ],
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
                "sequences": [
                    
                ]
            },
            "benefitCostsharing": {
                "coinsurances": [
                    {
                        "amount": "50%",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "12",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    },
                    {
                        "amount": "50%",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "12",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "copays": [
                    
                ],
                "oopMaximums": [
                    {
                        "coverageType": "Member",
                        "amount": "$8150",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            },
                            {
                                "name": "applyPriorMemberCostShare",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$16300",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Member",
                        "amount": "$16300",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            },
                            {
                                "name": "applyPriorMemberCostShare",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$32600",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "deductibles": [
                    {
                        "coverageType": "Member",
                        "amount": "$4000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$8000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "IN",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Member",
                        "amount": "$8000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$16000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "sequences": [
                    
                ]
            },
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "serviceCode": "SER0292",
            "benefitCategory": "Consults/Evals",
            "serviceName": "Sick Or Injured Care",
            "serviceProviderCategory": "Level 1 Provider",
            "placeOfService": "Professional",
            "costshareGroupingName": "OV Cost Share 1 Level 1",
            "costshareOrder": "Deductible,Copay,Coinsurance",
            "costshareRegimeIN": "Copay",
            "costshareRegimeINCode": "PRD_CP",
            "costshareRegimeOON": "Deductible then Coinsurnace",
            "costshareRegimeOONCode": "PRD_DE_CN",
            "stateMandate": "",
            "isExcluded": "false",
            "locationCode": "11",
            "networks": [
                {
                    "networkTier": "1",
                    "networkCode": "NT00001",
                    "networkName": "Core Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "NT00066",
                    "networkName": "UHC Options Out of Area National Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "",
                    "networkName": "Out Of Network",
                    "networkType": "OON",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                }
            ],
            "penalties": [
                
            ],
            "benefitLimits": {
                "limits": [
                    
                ],
                "sequences": [
                    
                ]
            },
            "benefitCostsharing": {
                "coinsurances": [
                    {
                        "amount": "20%",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "11",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "copays": [
                    
                ],
                "oopMaximums": [
                    {
                        "coverageType": "Member",
                        "amount": "$16300",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            },
                            {
                                "name": "applyPriorMemberCostShare",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$32600",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "deductibles": [
                    {
                        "coverageType": "Member",
                        "amount": "$8000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$16000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "sequences": [
                    {
                        "coverageType": "Member",
                        "unit": "Visit",
                        "counterStart": "1",
                        "counterStop": "1",
                        "coinsurances": [
                            
                        ],
                        "copays": [ 
                            {
                                "amount": "$0",
                                "networkTier": "1",
                                "location": "11",
                                "networkType": "IN",
                                "providerTier": "PCP/Select Specialist",
                                "providerTierCode": "1",
                                "unmappedIndicators": [
                                    {
                                        "name": "name",
                                        "value": false
                                    }
                                ],
                                "unmappedAttributes": [
                                    {
                                        "name": "name",
                                        "value": "value"
                                    }
                                ]
                            }
                        ],
                        "oopMaximums": [
                            {
                                "coverageType": "Member",
                                "amount": "$8150",
                                "networkTier": "1",
                                "providerTier": "",
                                "providerTierCode": "0",
                                "location": "",
                                "networkType": "IN",
                                "unmappedIndicators": [
                                    {
                                        "name": "embedded",
                                        "value": true
                                    },
                                    {
                                        "name": "consecutive",
                                        "value": false
                                    },
                                    {
                                        "name": "unlimitedLimit",
                                        "value": false
                                    },
                                    {
                                        "name": "applyPriorMemberCostShare",
                                        "value": false
                                    }
                                ],
                                "unmappedAttributes": [
                                    
                                ]
                            }
                        ],
                        "deductibles": [
                            
                        ]
                    },
                    {
                        "coverageType": "Member",
                        "unit": "Visit",
                        "counterStart": "2",
                        "counterStop": "",
                        "coinsurances": [
                            
                        ],
                        "copays": [
                            {
                                "amount": "$40",
                                "networkTier": "1",
                                "location": "11",
                                "networkType": "IN",
                                "providerTier": "PCP/Select Specialist",
                                "providerTierCode": "1",
                                "unmappedIndicators": [
                                    {
                                        "name": "name",
                                        "value": false
                                    }
                                ],
                                "unmappedAttributes": [
                                    {
                                        "name": "name",
                                        "value": "value"
                                    }
                                ]
                            }
                        ],
                        "oopMaximums": [
                            {
                                "coverageType": "Member",
                                "amount": "$8150",
                                "networkTier": "1",
                                "providerTier": "",
                                "providerTierCode": "0",
                                "location": "",
                                "networkType": "IN",
                                "unmappedIndicators": [
                                    {
                                        "name": "embedded",
                                        "value": true
                                    },
                                    {
                                        "name": "consecutive",
                                        "value": false
                                    },
                                    {
                                        "name": "unlimitedLimit",
                                        "value": false
                                    },
                                    {
                                        "name": "applyPriorMemberCostShare",
                                        "value": false
                                    }
                                ],
                                "unmappedAttributes": [
                                    
                                ]
                            }
                        ],
                        "deductibles": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "unit": "Visit",
                        "counterStart": "1",
                        "counterStop": "1",
                        "coinsurances": [
                            
                        ],
                        "copays": [
                            {
                                "amount": "$0",
                                "networkTier": "1",
                                "location": "11",
                                "networkType": "IN",
                                "providerTier": "PCP/Select Specialist",
                                "providerTierCode": "1",
                                "unmappedIndicators": [
                                    {
                                        "name": "name",
                                        "value": false
                                    }
                                ],
                                "unmappedAttributes": [
                                    {
                                        "name": "name",
                                        "value": "value"
                                    }
                                ]
                            }
                        ],
                        "oopMaximums": [
                            {
                                "coverageType": "Family",
                                "amount": "$16300",
                                "networkTier": "1",
                                "providerTier": "",
                                "providerTierCode": "0",
                                "location": "",
                                "networkType": "IN",
                                "unmappedIndicators": [
                                    {
                                        "name": "embedded",
                                        "value": true
                                    },
                                    {
                                        "name": "consecutive",
                                        "value": false
                                    },
                                    {
                                        "name": "unlimitedLimit",
                                        "value": false
                                    }
                                ],
                                "unmappedAttributes": [
                                    
                                ]
                            }
                        ],
                        "deductibles": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "unit": "Visit",
                        "counterStart": "2",
                        "counterStop": "",
                        "coinsurances": [
                            
                        ],
                        "copays": [
                            {
                                "amount": "$40",
                                "networkTier": "1",
                                "location": "11",
                                "networkType": "IN",
                                "providerTier": "PCP/Select Specialist",
                                "providerTierCode": "1",
                                "unmappedIndicators": [
                                    {
                                        "name": "name",
                                        "value": false
                                    }
                                ],
                                "unmappedAttributes": [
                                    {
                                        "name": "name",
                                        "value": "value"
                                    }
                                ]
                            }
                        ],
                        "oopMaximums": [
                            {
                                "coverageType": "Family",
                                "amount": "$16300",
                                "networkTier": "1",
                                "providerTier": "",
                                "providerTierCode": "0",
                                "location": "",
                                "networkType": "IN",
                                "unmappedIndicators": [
                                    {
                                        "name": "embedded",
                                        "value": true
                                    },
                                    {
                                        "name": "consecutive",
                                        "value": false
                                    },
                                    {
                                        "name": "unlimitedLimit",
                                        "value": false
                                    }
                                ],
                                "unmappedAttributes": [
                                    
                                ]
                            }
                        ],
                        "deductibles": [
                            
                        ]
                    }
                ]
            },
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "serviceCode": "SER0293",
            "benefitCategory": "Consults/Evals",
            "serviceName": "Sick Or Injured Care",
            "serviceProviderCategory": "",
            "placeOfService": "Facility",
            "costshareGroupingName": "OV Cost Share 2 Level 2",
            "costshareOrder": "Deductible,Copay,Coinsurance",
            "costshareRegimeIN": "Copay",
            "costshareRegimeINCode": "PRD_CP",
            "costshareRegimeOON": "Deductible then Coinsurnace",
            "costshareRegimeOONCode": "PRD_DE_CN",
            "stateMandate": "",
            "isExcluded": "false",
            "locationCode": "22",
            "networks": [
                {
                    "networkTier": "1",
                    "networkCode": "NT00001",
                    "networkName": "Core Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "NT00066",
                    "networkName": "UHC Options Out of Area National Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "",
                    "networkName": "Out Of Network",
                    "networkType": "OON",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                }
            ],
            "penalties": [
                
            ],
            "benefitLimits": {
                "limits": [
                    
                ],
                "sequences": [
                    
                ]
            },
            "benefitCostsharing": {
                "coinsurances": [
                    {
                        "amount": "20%",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "11",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "copays": [
                    {
                        "amount": "$60",
                        "networkTier": "1",
                        "location": "22",
                        "networkType": "IN",
                        "providerTier": "Specialist Facility?",
                        "providerTierCode": "2",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "oopMaximums": [
                    {
                        "coverageType": "Member",
                        "amount": "$16300",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            },
                            {
                                "name": "applyPriorMemberCostShare",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$32600",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "deductibles": [
                    {
                        "coverageType": "Member",
                        "amount": "$8000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$16000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "sequences": [
                    
                ]
            },
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "serviceCode": "SER0294",
            "benefitCategory": "Consults/Evals",
            "serviceName": "Sick Or Injured Care",
            "serviceProviderCategory": "Level 2 Provider",
            "placeOfService": "Professional",
            "costshareGroupingName": "OV Cost Share 2 Level 2",
            "costshareOrder": "Deductible,Copay,Coinsurance",
            "costshareRegimeIN": "Copay",
            "costshareRegimeINCode": "PRD_CP",
            "costshareRegimeOON": "Deductible then Coinsurnace",
            "costshareRegimeOONCode": "PRD_DE_CN",
            "stateMandate": "",
            "isExcluded": "false",
            "locationCode": "11",
            "networks": [
                {
                    "networkTier": "1",
                    "networkCode": "NT00001",
                    "networkName": "Core Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "NT00066",
                    "networkName": "UHC Options Out of Area National Network",
                    "networkType": "OOA",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "",
                    "networkName": "Out Of Network",
                    "networkType": "OON",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                }
            ],
            "penalties": [
                
            ],
            "benefitLimits": {
                "limits": [
                    
                ],
                "sequences": [
                    
                ]
            },
            "benefitCostsharing": {
                "coinsurances": [
                    {
                        "amount": "20%",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "11",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "copays": [
                    {
                        "amount": "$60",
                        "networkTier": "1",
                        "location": "11",
                        "networkType": "IN",
                        "providerTier": "Specialist",
                        "providerTierCode": "2",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "oopMaximums": [
                    {
                        "coverageType": "Member",
                        "amount": "$16300",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            },
                            {
                                "name": "applyPriorMemberCostShare",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$32600",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "deductibles": [
                    {
                        "coverageType": "Member",
                        "amount": "$8000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$16000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "sequences": [
                    
                ]
            },
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        },
        {
            "serviceCode": "SER0295",
            "benefitCategory": "Urgent Care",
            "serviceName": "Sick Or Injured Care at Location 20",
            "serviceProviderCategory": "",
            "placeOfService": "Professional",
            "costshareGroupingName": "Urgent Care",
            "costshareOrder": "Deductible,Copay,Coinsurance",
            "costshareRegimeIN": "Copay",
            "costshareRegimeINCode": "PRD_CP",
            "costshareRegimeOON": "Deductible then Coinsurnace",
            "costshareRegimeOONCode": "PRD_DE_CN",
            "stateMandate": "",
            "isExcluded": "false",
            "locationCode": "20",
            "networks": [
                {
                    "networkTier": "1",
                    "networkCode": "NT00001",
                    "networkName": "Core Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "NT00066",
                    "networkName": "UHC Options Out of Area National Network",
                    "networkType": "IN",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                },
                {
                    "networkTier": "1",
                    "networkCode": "",
                    "networkName": "Out Of Network",
                    "networkType": "OON",
                    "unmappedIndicators": [
                        {
                            "name": "name",
                            "value": false
                        }
                    ],
                    "unmappedAttributes": [
                        {
                            "name": "name",
                            "value": "value"
                        }
                    ]
                }
            ],
            "penalties": [
                
            ],
            "benefitLimits": {
                "limits": [
                    
                ],
                "sequences": [
                    
                ]
            },
            "benefitCostsharing": {
                "coinsurances": [
                    {
                        "amount": "20%",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "20",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "copays": [
                    {
                        "amount": "$75",
                        "networkTier": "1",
                        "location": "20",
                        "networkType": "IN",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "unmappedIndicators": [
                            {
                                "name": "name",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            {
                                "name": "name",
                                "value": "value"
                            }
                        ]
                    }
                ],
                "oopMaximums": [
                    {
                        "coverageType": "Member",
                        "amount": "$16300",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            },
                            {
                                "name": "applyPriorMemberCostShare",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$32600",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "consecutive",
                                "value": false
                            },
                            {
                                "name": "unlimitedLimit",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "deductibles": [
                    {
                        "coverageType": "Member",
                        "amount": "$8000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    },
                    {
                        "coverageType": "Family",
                        "amount": "$16000",
                        "networkTier": "1",
                        "providerTier": "",
                        "providerTierCode": "0",
                        "location": "",
                        "networkType": "OON",
                        "unmappedIndicators": [
                            {
                                "name": "applyToOOPMax",
                                "value": true
                            },
                            {
                                "name": "embedded",
                                "value": true
                            },
                            {
                                "name": "maxBenefit",
                                "value": false
                            },
                            {
                                "name": "benefitSpecificDeductible",
                                "value": false
                            }
                        ],
                        "unmappedAttributes": [
                            
                        ]
                    }
                ],
                "sequences": [
                    
                ]
            },
            "unmappedIndicators": [
                {
                    "name": "name",
                    "value": false
                }
            ],
            "unmappedAttributes": [
                {
                    "name": "name",
                    "value": "value"
                }
            ]
        }
    ]; //Added providerTierCode : "0" to the last deductible.
}

//Distinctive.
export interface Plan {
    planInfo: PlanInfo;
    unmappedAttributes: Attribute[];
    unmappedIndicators: Indicator[];
    planIntegrations: Integration[];
    networks: Network[];
    penalties: Penalty[];
    planCostSharing: PlanCostSharing;
    benefits: Benefit[];
}
export interface PlanInfo {
    productFamily: string;
    tierType: string;
    hipaa271ProductCode: string;
    planVersion: string;
    sellingPreferenceCode: string;
    tierTypeCode: string;
    productName: string;
    legalEntity: string;
    productLine: string;
    businessLineCode: string;
    productOfferingCode: string;
    hipaa835ProductCode: string;
    mccComplianceCode: string;
    initialClaimAdjudicationBeginDate: string;
    priorApprovalResponsibilities: PriorApprovalResponsibility[]; //ARRAY!
    marketSegment: string;
    planType: string;
    mccCompliance: string;
    productOffering: string;
    claimAdjudicationBeginDate: string;
    coveragePeriodStartMonth: string;
    fundingArrangement: string;
    noReferralAdjudicationPolicy: string;
    yearType: string;
    ratingState: string;
    businessLine: string;
    planEffectiveDate: string;
    planVertical: string;
    planID: string;
    glCorpCode: string;
    planRenewalDate: string;
    HSAQualifiedIndicator: string;
  }

export interface PriorApprovalResponsibility {
    responsibleParty: string;
    networkType: string;
}

export interface Attribute {
    name: string;
    value: string;
}

export interface Indicator {
    name: string;
    value: boolean;
}

export interface Integration {
    integratedPlanType: string;
    soldTogether: boolean;
    sharedAccumulators: Accumulator[];
}

export interface Accumulator {
    accumulatorType: string;
    networkType: string;
    networkTier: string;
    isShared: boolean;
    // coverageLevel: string; //New. Not from schema.
}

export interface Network {
    networkType: string;
    networkTier: string;
    networkCode: string;
    unmappedAttributes: Attribute[];
    unmappedIndicators: Indicator[];
}

export interface Penalty {
    dollarAmount: string;
    percentAmount: string;
    penaltyQualifier: string;
}

export interface PlanCostSharing { 
    planCoinsurances: Coinsurance[];
    planOOPMaximums: OopMax[];
    planDeductibles: Deductible[];
}

export interface Coinsurance {
    networkType: string;
    networkTier: string;
    providerTier: string;
    providerTierCode: string;
    location: string;
    amount: string;
    unmappedAttributes: Attribute[];
    unmappedIndicators: Indicator[];
}

export interface Deductible {
    coverageType: string;
    networkType: string;
    networkTier: string;
    providerTier: string;
    providerTierCode: string;
    location: string;
    amount: string;
    unmappedAttributes: Attribute[];
    unmappedIndicators: Indicator[];
}

export interface OopMax {
    coverageType: string;
    networkType: string;
    networkTier: string;
    providerTier: string;
    providerTierCode: string;
    location: string;
    amount: string;
    unmappedAttributes: Attribute[];
    unmappedIndicators: Indicator[];
}

export interface Benefit {
    serviceCode: string;
    // serviceCategory: string; //In the JSON schema, not the actual data.
    serviceName: string;
    serviceProviderCategory: string;
    placeOfService: string;
    costshareGroupingName: string;
    costshareRegimeIN: string;
    costshareRegimeINCode: string;
    costshareRegimeOON: string;
    costshareRegimeOONCode: string;
    costshareOrder: string;
    stateMandate: string;
    isExcluded: string; //Not a boolean in actual data.
    unmappedAttributes: Attribute[];
    unmappedIndicators: Indicator[];
    networks: Network[];
    penalties: Penalty[];
    benefitCostsharing: { 
        copays: Copay[],
        coinsurances: Coinsurance[],
        deductibles: Deductible[],
        oopMaximums: OopMax[],
        sequences: CostSharingSequence[]
    };
    // benefitCostSharing: BenefitCostSharing;
    benefitLimits: {
        limits: BenefitLimit[];
        sequences: LimitSequence[];
    }
    // benefitLimits: BenefitLimit;
}

// export interface BenefitCostSharing {
//     copays: Copay[];
//     coinsurances: Coinsurance[];
//     deductibles: Deductible[];
//     oopMaximums: OopMax[];
//     sequences: CostSharingSequence[];
// }

export interface Copay {
    networkType: string;
    networkTier: string;
    providerTier: string;
    providerTierCode: string;
    location: string;
    amount: string;
    unmappedAttributes: Attribute[];
    unmappedIndicators: Indicator[];
}

export interface CostSharingSequence {
    coverageType: string;
    unit: string;
    counterStart: string;
    counterStop: string;
    copays: Copay[];
    coinsurances: Coinsurance[];
    deductibles: Deductible[];
    oopMaximums: OopMax[];
}

export interface BenefitLimit {
    coverageRange: string;
    value: string;
    limitType: string;
    frequency: string;
    unmappedAttributes: Attribute[];
    unmappedIndicators: Indicator[];
}

export interface LimitSequence {
    coverageType: string;
    unit: string;
    counterStart: string;
    counterStop: string;
    limits: BenefitLimit[];
}