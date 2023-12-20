class City{

constructor(name, address, city) {
this.name = name;
this.address = address;
this.city = city;
}

print() {console.log(this.name+' '+this.address+' '+this.city);}


}

class BigCity extends City{

constructor(message) {
    super(message,message,message);
    this.message = message;
}

print2() {console.log(this.message);}


}


     b1 = new BigCity("Welcome to BigCity");
     c1=new City("Rohtak","Prem Nagar","Lol");
     c1.print();
     b1.print2();

