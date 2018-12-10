/* TRANSFER = [0]
REVALIDATION = [1]
PURCHASE = [2]
BAGGAGE = [3]
*/

var getCheckoutData = [
    {
        "orderId":"13213942",
        "date":"2018-11-29T22:22:27.881",
               "status":"NEW",
               "subStatus":"NEW",
               "itemList":[
                  {
                     "id":"3928144",
                     "status":"NEW",
                     "subStatus":"NEW",
                     "maxInstallments":"3",
                     "transactionList":[
        
                     ],
                     "miles":{
                        "quantity":"1000",
                        "optionId":"1-1HKP6KT0",
                        "unitCost":"0.06",
                        "subTotalCost":"60.0",
                        "discount":"0.0",
                        "totalCost":"60.0",
                        "expiryDate":"2019-11-28",
                        "operation":"TRANSFER",
                        "receiver":{
                            "name":"JONATHAS RUIZ DOS SANTOS",
                            "memberNumber":"506554182"
                        }
                     },
                     "totals":{
                        "total":{
                           "money":"60.0"
                        }
                     }
                  }
               ],
               "totals":{
                  "total":{
                     "money":"60.0",
                     "miles":"0"
                  },
                  "installmentList":[
        
                  ],
                  "totalPassengers":"0",
                  "totalByTypeList":[
        
                  ],
                  "totalByPassengerTypeList":[
        
                  ]
               },
               "typeCheckout":"miles"
    },
    {
       "orderId":"13213942",
"date":"2018-11-29T22:22:27.881",
       "status":"NEW",
       "subStatus":"NEW",
       "itemList":[
          {
             "id":"3928144",
             "status":"NEW",
             "subStatus":"NEW",
             "maxInstallments":"3",
             "transactionList":[

             ],
             "miles":{
                "quantity":"1000",
                "optionId":"1-1HKP6KT0",
                "unitCost":"0.06",
                "subTotalCost":"60.0",
                "discount":"0.0",
                "totalCost":"60.0",
                "expiryDate":"2019-11-28",
                "operation":"REVALIDATION"
             },
             "totals":{
                "total":{
                   "money":"60.0"
                }
             }
          }
       ],
       "totals":{
          "total":{
             "money":"60.0",
             "miles":"0"
          },
          "installmentList":[

          ],
          "totalPassengers":"0",
          "totalByTypeList":[

          ],
          "totalByPassengerTypeList":[

          ]
       },
       "typeCheckout":"miles"
    },{
        "itemList": [
            {
                "id": "2990",
                "miles": {
                    "quantity": "1000",
                    "optionId": "1-MLD3PU5",
                    "unitCost": "0.07",
                    "subTotalCost": "70.00",
                    "discount": "0",
                    "totalCost": "70.00",
                    "expiryDate": "2019-11-28",
                    "operation": "PURCHASE"
                },
                "creditCardOptionList": [
                    {
                        "brand": "MASTERCARD_SMILES",
                        "description": "CARTÃO SMILES",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "7.76",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    },
                    {
                        "brand": "MASTERCARD",
                        "description": "MASTERCARD",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "7.76",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    },
                    {
                        "brand": "VISA",
                        "description": "VISA",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "7.76",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    },
                    {
                        "brand": "AMEX",
                        "description": "AMEX",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "7.76",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    },
                    {
                        "brand": "DINERS_CLUB",
                        "description": "DINERS CLUB",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "7.76",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    },
                    {
                        "brand": "MASTERCARD_GOL",
                        "description": "CARTÃO GOL",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    },
                    {
                        "brand": "HIPERCARD",
                        "description": "HIPERCARD",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "7.76",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    },
                    {
                        "brand": "ELO",
                        "description": "ELO",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "7.76",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    },
                    {
                        "brand": "DISCOVER",
                        "description": "DISCOVER",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "70"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "35",
                                    "35"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "23.34",
                                    "23.33",
                                    "23.33"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "17.5",
                                    "17.5",
                                    "17.5",
                                    "17.5"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "14",
                                    "14",
                                    "14",
                                    "14",
                                    "14"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "11.65",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67",
                                    "11.67"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10",
                                    "10"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75",
                                    "8.75"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "7.76",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78",
                                    "7.78"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7",
                                    "7"
                                ],
                                "interestRate": "0",
                                "total": "70.00"
                            }
                        ]
                    }
                ],
                "totals": {
                    "total": {
                        "money": "70.0"
                    }
                },
                "status": "NEW",
                "subStatus": null,
                "tokenGds": null
            }
        ],
        "totals": {
            "total": {
                "money": "70.0",
                "miles": "0"
            },
            "totalPassengers": "0",
            "totalByTypeList": [],
            "totalByPassengerTypeList": []
        },
        "creditCardOptionList": [
            {
                "brand": "MASTERCARD_SMILES",
                "description": "CARTÃO SMILES",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "7.76",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            },
            {
                "brand": "MASTERCARD",
                "description": "MASTERCARD",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "7.76",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            },
            {
                "brand": "VISA",
                "description": "VISA",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "7.76",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            },
            {
                "brand": "AMEX",
                "description": "AMEX",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "7.76",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            },
            {
                "brand": "DINERS_CLUB",
                "description": "DINERS CLUB",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "7.76",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            },
            {
                "brand": "MASTERCARD_GOL",
                "description": "CARTÃO GOL",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            },
            {
                "brand": "HIPERCARD",
                "description": "HIPERCARD",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "7.76",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            },
            {
                "brand": "ELO",
                "description": "ELO",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "7.76",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            },
            {
                "brand": "DISCOVER",
                "description": "DISCOVER",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "70"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "35",
                            "35"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "23.34",
                            "23.33",
                            "23.33"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "17.5",
                            "17.5",
                            "17.5",
                            "17.5"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "14",
                            "14",
                            "14",
                            "14",
                            "14"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "11.65",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67",
                            "11.67"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10",
                            "10"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75",
                            "8.75"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "7.76",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78",
                            "7.78"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7",
                            "7"
                        ],
                        "interestRate": "0",
                        "total": "70.00"
                    }
                ]
            }
        ],
        "memberNumber": "902233043",
        "status": "NEW",
        "subStatus": null,
        "isAllowedSaveCard": "true",
        "typeCheckout":"miles"
    },
    {
        "itemList": [
            {
                "id": "3929725",
                "booking": {
                    "baggage": {
                        "flightList": [
                            {
                                "recordLocator": "JL57GG",
                                "flightNumber": "1392",
                                "departure": {
                                    "date": "2019-02-15T10:10:00",
                                    "airportCode": "GRU",
                                    "airportName": null,
                                    "airportCity": null
                                },
                                "arrival": {
                                    "date": "2019-02-15T11:35:00",
                                    "airportCode": "VIX",
                                    "airportName": null,
                                    "airportCity": null
                                },
                                "passengerBaggageList": [
                                    {
                                        "passenger": {
                                            "index": "0",
                                            "firstName": "PAULO LUIZ",
                                            "lastName": "CAMPOS"
                                        },
                                        "baggage": {
                                            "code": "BA3",
                                            "quantity": "3",
                                            "amount": "290.0",
                                            "weight": "23.0",
                                            "maxWeight": "0.0",
                                            "keyValue": "0-0-BA1/BA2/BA3-1392-GRU-VIX-2019/02/15T10:10:00.000",
                                            "cartQuantity": "3"
                                        },
                                        "miles": "0",
                                        "money": "290.0"
                                    }
                                ],
                                "totalByType": {
                                    "type": "BAGGAGE_FARE",
                                    "miles": "0",
                                    "money": "290.0"
                                }
                            }
                        ]
                    }
                },
                "creditCardOptionList": [
                    {
                        "brand": "MASTERCARD_SMILES",
                        "description": "CARTÃO SMILES",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    },
                    {
                        "brand": "MASTERCARD",
                        "description": "MASTERCARD",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    },
                    {
                        "brand": "VISA",
                        "description": "VISA",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    },
                    {
                        "brand": "AMEX",
                        "description": "AMEX",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    },
                    {
                        "brand": "DINERS_CLUB",
                        "description": "DINERS CLUB",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    },
                    {
                        "brand": "MASTERCARD_GOL",
                        "description": "CARTÃO GOL",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    },
                    {
                        "brand": "HIPERCARD",
                        "description": "HIPERCARD",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    },
                    {
                        "brand": "ELO",
                        "description": "ELO",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    },
                    {
                        "brand": "DISCOVER",
                        "description": "DISCOVER",
                        "installmentOptionList": [
                            {
                                "quantity": "1",
                                "installmentList": [
                                    "290"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "2",
                                "installmentList": [
                                    "145",
                                    "145"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "3",
                                "installmentList": [
                                    "96.66",
                                    "96.67",
                                    "96.67"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "4",
                                "installmentList": [
                                    "72.5",
                                    "72.5",
                                    "72.5",
                                    "72.5"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "5",
                                "installmentList": [
                                    "58",
                                    "58",
                                    "58",
                                    "58",
                                    "58"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "6",
                                "installmentList": [
                                    "48.35",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33",
                                    "48.33"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "7",
                                "installmentList": [
                                    "41.42",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43",
                                    "41.43"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "8",
                                "installmentList": [
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25",
                                    "36.25"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "9",
                                "installmentList": [
                                    "32.24",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22",
                                    "32.22"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "10",
                                "installmentList": [
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29",
                                    "29"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "11",
                                "installmentList": [
                                    "26.4",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36",
                                    "26.36"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            },
                            {
                                "quantity": "12",
                                "installmentList": [
                                    "24.13",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17",
                                    "24.17"
                                ],
                                "interestRate": "0",
                                "total": "290.00"
                            }
                        ]
                    }
                ],
                "status": "NEW",
                "subStatus": "NEW",
                "tokenGds": "H4sIAAAAAAAEABXOSQ6CMAAAwL/0WhNFRMHEg7UGjCJYFG3jBQRskSVsWre/G+cF8wZbb+2JaxG0XR2DKfAaW8M5FMTfzT7dAyEzCKWE6ZKeoiGSJaWBjydNq19u+LIrkm2lGqIZHrXVPGVok9fwtu+WTmtErqG+iC8ZTXQ+suC5r0ruWgeTxpAx4dY45o/iOiBJaCsTnSdjBH3Bnk8x3vODgqFQ06pqKcmce6lAewZ6gJRZvCij/3PhoBH4/gDsX9QEvwAAAA=="
            }
        ],
        "totals": {
            "total": {
                "money": "290.0",
                "miles": "0"
            },
            "totalPassengers": "0",
            "totalByTypeList": [
                {
                    "type": "BAGGAGE_FARE",
                    "miles": "0",
                    "money": "290"
                }
            ],
            "totalByPassengerTypeList": []
        },
        "creditCardOptionList": [
            {
                "brand": "MASTERCARD_SMILES",
                "description": "CARTÃO SMILES",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            },
            {
                "brand": "MASTERCARD",
                "description": "MASTERCARD",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            },
            {
                "brand": "VISA",
                "description": "VISA",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            },
            {
                "brand": "AMEX",
                "description": "AMEX",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            },
            {
                "brand": "DINERS_CLUB",
                "description": "DINERS CLUB",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            },
            {
                "brand": "MASTERCARD_GOL",
                "description": "CARTÃO GOL",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            },
            {
                "brand": "HIPERCARD",
                "description": "HIPERCARD",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            },
            {
                "brand": "ELO",
                "description": "ELO",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            },
            {
                "brand": "DISCOVER",
                "description": "DISCOVER",
                "installmentOptionList": [
                    {
                        "quantity": "1",
                        "installmentList": [
                            "290"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "2",
                        "installmentList": [
                            "145",
                            "145"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "3",
                        "installmentList": [
                            "96.66",
                            "96.67",
                            "96.67"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "4",
                        "installmentList": [
                            "72.5",
                            "72.5",
                            "72.5",
                            "72.5"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "5",
                        "installmentList": [
                            "58",
                            "58",
                            "58",
                            "58",
                            "58"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "6",
                        "installmentList": [
                            "48.35",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33",
                            "48.33"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "7",
                        "installmentList": [
                            "41.42",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43",
                            "41.43"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "8",
                        "installmentList": [
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25",
                            "36.25"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "9",
                        "installmentList": [
                            "32.24",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22",
                            "32.22"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "10",
                        "installmentList": [
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29",
                            "29"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "11",
                        "installmentList": [
                            "26.4",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36",
                            "26.36"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    },
                    {
                        "quantity": "12",
                        "installmentList": [
                            "24.13",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17",
                            "24.17"
                        ],
                        "interestRate": "0",
                        "total": "290.00"
                    }
                ]
            }
        ],
        "memberNumber": "719007984",
        "status": "NEW",
        "subStatus": null,
        "savedCardList": [
            {
                "holderName": "PAULO LUIZ CAMPOS",
                "number": "4145",
                "expirationDate": "4/2022",
                "brand": "MASTERCARD",
                "bin": "552128",
                "token": "2815187019725032",
                "issuingBank": "CITIBANK BRAZIL",
                "isPrimary": "false",
                "tokenAux": "37537e14-b880-4698-9246-42acfa5774fa"
            },
            {
                "holderName": "TESTE SILVA",
                "number": "1111",
                "expirationDate": "10/2020",
                "brand": "VISA",
                "bin": "411111",
                "token": "8315435948480167",
                "issuingBank": "N/A",
                "isPrimary": "true",
                "tokenAux": "a7b5d115-74f0-4ccc-92ca-de9089810695"
            }
        ],
        "isAllowedSaveCard": "true"
    },
    {
        "itemList":[
           {
              "id":3930326,
              "miles":{
                 "quantity":1000,
                 "optionId":"1-1IUOYJU",
                 "unitCost":0.07,
                 "subTotalCost":70.0,
                 "discount":0,
                 "totalCost":70.0,
                 "expiryDate":"2019-12-06T00:00:00.000Z",
                 "operation":"PURCHASE",
                 "smilesClubMilesPrice":0.0,
                 "smilesClubMilesBonus":1500,
                 "milesBonus":0
              },
              "creditCardOptionList":[
                 {
                    "brand":"MASTERCARD_SMILES",
                    "description":"CARTÃO SMILES",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":7,
                          "installmentList":[
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":8,
                          "installmentList":[
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":9,
                          "installmentList":[
                             7.76,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":10,
                          "installmentList":[
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 },
                 {
                    "brand":"MASTERCARD",
                    "description":"MASTERCARD",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":7,
                          "installmentList":[
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":8,
                          "installmentList":[
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":9,
                          "installmentList":[
                             7.76,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":10,
                          "installmentList":[
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 },
                 {
                    "brand":"VISA",
                    "description":"VISA",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":7,
                          "installmentList":[
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":8,
                          "installmentList":[
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":9,
                          "installmentList":[
                             7.76,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":10,
                          "installmentList":[
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 },
                 {
                    "brand":"AMEX",
                    "description":"AMEX",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":7,
                          "installmentList":[
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":8,
                          "installmentList":[
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":9,
                          "installmentList":[
                             7.76,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":10,
                          "installmentList":[
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 },
                 {
                    "brand":"DINERS_CLUB",
                    "description":"DINERS CLUB",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":7,
                          "installmentList":[
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":8,
                          "installmentList":[
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":9,
                          "installmentList":[
                             7.76,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":10,
                          "installmentList":[
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 },
                 {
                    "brand":"MASTERCARD_GOL",
                    "description":"CARTÃO GOL",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 },
                 {
                    "brand":"HIPERCARD",
                    "description":"HIPERCARD",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":7,
                          "installmentList":[
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":8,
                          "installmentList":[
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":9,
                          "installmentList":[
                             7.76,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":10,
                          "installmentList":[
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 },
                 {
                    "brand":"ELO",
                    "description":"ELO",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":7,
                          "installmentList":[
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":8,
                          "installmentList":[
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":9,
                          "installmentList":[
                             7.76,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":10,
                          "installmentList":[
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 },
                 {
                    "brand":"DISCOVER",
                    "description":"DISCOVER",
                    "installmentOptionList":[
                       {
                          "quantity":1,
                          "installmentList":[
                             70.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":2,
                          "installmentList":[
                             35.0,
                             35.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":3,
                          "installmentList":[
                             23.34,
                             23.33,
                             23.33
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":4,
                          "installmentList":[
                             17.5,
                             17.5,
                             17.5,
                             17.5
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":5,
                          "installmentList":[
                             14.0,
                             14.0,
                             14.0,
                             14.0,
                             14.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":6,
                          "installmentList":[
                             11.65,
                             11.67,
                             11.67,
                             11.67,
                             11.67,
                             11.67
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":7,
                          "installmentList":[
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0,
                             10.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":8,
                          "installmentList":[
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75,
                             8.75
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":9,
                          "installmentList":[
                             7.76,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78,
                             7.78
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       },
                       {
                          "quantity":10,
                          "installmentList":[
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0,
                             7.0
                          ],
                          "interestRate":0.0,
                          "total":70.0
                       }
                    ]
                 }
              ],
              "paymentData":{
     
              },
              "transactions":[
     
              ],
              "status":"NEW",
              "totals":{
                 "money":70.0
              }
           }
        ],
        "total":{
           "money":70.0,
           "miles":0,
           "totalPassengers":0,
           "totalByType":[
     
           ],
           "totalByPassengers":[
     
           ]
        },
        "creditCardOptionList":[
           {
              "brand":"MASTERCARD_SMILES",
              "description":"CARTÃO SMILES",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":7,
                    "installmentList":[
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":8,
                    "installmentList":[
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":9,
                    "installmentList":[
                       7.76,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":10,
                    "installmentList":[
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           },
           {
              "brand":"MASTERCARD",
              "description":"MASTERCARD",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":7,
                    "installmentList":[
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":8,
                    "installmentList":[
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":9,
                    "installmentList":[
                       7.76,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":10,
                    "installmentList":[
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           },
           {
              "brand":"VISA",
              "description":"VISA",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":7,
                    "installmentList":[
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":8,
                    "installmentList":[
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":9,
                    "installmentList":[
                       7.76,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":10,
                    "installmentList":[
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           },
           {
              "brand":"AMEX",
              "description":"AMEX",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":7,
                    "installmentList":[
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":8,
                    "installmentList":[
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":9,
                    "installmentList":[
                       7.76,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":10,
                    "installmentList":[
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           },
           {
              "brand":"DINERS_CLUB",
              "description":"DINERS CLUB",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":7,
                    "installmentList":[
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":8,
                    "installmentList":[
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":9,
                    "installmentList":[
                       7.76,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":10,
                    "installmentList":[
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           },
           {
              "brand":"MASTERCARD_GOL",
              "description":"CARTÃO GOL",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           },
           {
              "brand":"HIPERCARD",
              "description":"HIPERCARD",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":7,
                    "installmentList":[
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":8,
                    "installmentList":[
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":9,
                    "installmentList":[
                       7.76,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":10,
                    "installmentList":[
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           },
           {
              "brand":"ELO",
              "description":"ELO",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":7,
                    "installmentList":[
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":8,
                    "installmentList":[
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":9,
                    "installmentList":[
                       7.76,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":10,
                    "installmentList":[
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           },
           {
              "brand":"DISCOVER",
              "description":"DISCOVER",
              "installmentOptionList":[
                 {
                    "quantity":1,
                    "installmentList":[
                       70.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":2,
                    "installmentList":[
                       35.0,
                       35.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":3,
                    "installmentList":[
                       23.34,
                       23.33,
                       23.33
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":4,
                    "installmentList":[
                       17.5,
                       17.5,
                       17.5,
                       17.5
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":5,
                    "installmentList":[
                       14.0,
                       14.0,
                       14.0,
                       14.0,
                       14.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":6,
                    "installmentList":[
                       11.65,
                       11.67,
                       11.67,
                       11.67,
                       11.67,
                       11.67
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":7,
                    "installmentList":[
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0,
                       10.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":8,
                    "installmentList":[
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75,
                       8.75
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":9,
                    "installmentList":[
                       7.76,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78,
                       7.78
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 },
                 {
                    "quantity":10,
                    "installmentList":[
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0,
                       7.0
                    ],
                    "interestRate":0.0,
                    "total":70.0
                 }
              ]
           }
        ],
        "memberNumber":"300028875",
        "status":"NEW",
        "subStatus":"",
        "savedCardList":{
           "memberCardVOList":[
              {
                 "holderName":"LEONARDO T NIQUINI",
                 "number":"5877",
                 "expirationDate":"8/2026",
                 "brand":"VISA",
                 "bin":"425850",
                 "token":"3015336500595513",
                 "issuingBank":"Banco Santander S.A.",
                 "isPrimary":false,
                 "firstHolderName":"LEONARDO",
                 "creditCardBrandVO":"VISA",
                 "creditCardBrandType":"VISA",
                 "tokenAux":"02753514-69bf-4424-ab1b-76301e2e1de9"
              },
              {
                 "holderName":"TESTE SILVA",
                 "number":"1111",
                 "expirationDate":"10/2020",
                 "brand":"VISA",
                 "bin":"411111",
                 "token":"8315179137950925",
                 "issuingBank":"N/A",
                 "isPrimary":true,
                 "firstHolderName":"TESTE",
                 "creditCardBrandVO":"VISA",
                 "creditCardBrandType":"VISA",
                 "tokenAux":"47345ee6-1528-429e-a353-edbe37b8bfeb"
              }
           ]
        },
        "isAllowedSaveCard":true
     }
    
]

module.exports = {
    getCheckoutData
}



 