class Bank{
    minspeed=100;

constructor(name,location,employee,interestRate)
{
    this.name= name;
    this.location = location;
    this.employee = employee;
    this.interestRate = interestRate;
    this.minspeed=200;

}

printDetails()
{
    console.log(this.name,this.employee,this.interestRate,this.location);
}

}

const bank1=new Bank("Punjab Bank","Punjab","25000","52%");
bank1.printDetails();
console.log(bank1.interestRate);
console.log(bank1.minspeed);