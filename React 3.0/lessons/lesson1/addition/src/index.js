import Employers from './employers.js';
import Sponsors from './sponsors' ;

let employers = new Employers('Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann');
let sponsors = new Sponsors([40000, 5000, 30400, 12000], ['SRL', 'PLO', 'J&K'], ['RusAuto', 'SBO']);

class MakeBusiness extends Sponsors{
  constructor({cash, eu, rus, owner, director = 'Victor', emp}){
    super(cash, eu, rus);
    this.owner = owner;
    this.director = director;
    this.emp = emp;
  }
  getInfo(){
      console.log(`
      We have a business. Owner: ${this.owner} , director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}
      And we have a sponsors:
      ${this.eu} ${this.rus} unexpected sponsor
      Note. Be careful with ${this.eu[0]}. It's a huge risk.`);
  }
}

let myBusiness = new MakeBusiness({
  owner: 'Sam', 
  cash: sponsors.cash, 
  eu: sponsors.eu, 
  rus: sponsors.rus, 
  emp: employers.filt()
});

myBusiness.getInfo();
