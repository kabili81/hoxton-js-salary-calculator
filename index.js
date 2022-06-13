let mySalary = "Salary Bruto"
console.log(mySalary)
let salary = "500" 
console.log(salary)
let employeePensionContribution = "Employee Pension Contribution 5%"
console.log(employeePensionContribution)
let contribution = salary * 0.05
console.log(contribution)
let employerPensionContribution = "Employer Pension Contribution 5%"
console.log(employerPensionContribution)
let contribution1 = salary * 0.05
console.log(contribution1)
let taxedSalary = "Taxed Salary"
console.log(taxedSalary)
let taxed = (salary-contribution)
console.log(taxed)
let taxedSalary1 = "Salary from 0-80€"
console.log(taxedSalary1)
let taxSalary0 = (80-0) * 0.00
console.log(taxSalary0)
let taxedSalary2 = "Salary from 80-250€"
console.log(taxedSalary2)
let taxSalary = (250-80) * 0.04
console.log(taxSalary)
let taxedSalary3 = "Salary from 250-450€"
console.log(taxedSalary3)
let taxSalary1 = (450-250) * 0.08
console.log(taxSalary1)
let taxedSalary4 = "Salary over 450€"
console.log(taxedSalary4)
let taxSalary2 = (taxed-450) * 0.1
console.log(taxSalary2)
let totalTaxes = "Total Taxes"
console.log(totalTaxes)
console.log(taxSalary0+taxSalary+taxSalary1+taxSalary2)
let netSalary = "NET SALARY"
console.log(netSalary)
console.log(salary-contribution-taxSalary-taxSalary1-taxSalary2)

//- 4% on amounts between 80-250 EUR
//- 8% on amounts between 250-450 EUR
//- 10% on everything over 450 EUR.