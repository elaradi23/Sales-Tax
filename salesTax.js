var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var results = {};

  for (var company in salesData){
    var tempObject = {};

    var tempCompany = salesData[company];
    var companyName = tempCompany.name;
    var companySales = 0;
    var companyTax = 0;

    for (var i = 0; i < tempCompany.sales.length; i++){
      companySales += tempCompany.sales[i];
    }

    companyTax = companySales * taxRates[tempCompany.province];

    tempObject = {totalSales: companySales, totalTaxes: companyTax};

    if (!results.hasOwnProperty(companyName)){
      results[companyName] = tempObject;
    } else {
      results[companyName].totalSales += companySales;
      results[companyName].totalTaxes += companyTax;
    }
  }
  return results;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/