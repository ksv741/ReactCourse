let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => {
  return name.length > 0;
}).map((item) => {return item.toLowerCase().trim();});

let sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
  calcCash(){
    let total = 0;
    this.cash.forEach(currentItem => {
      total += +currentItem;
    });
    return total;
  }
};
let {eu, rus} = sponsors;
let money = sponsors.calcCash();

function makeBusiness({owner, director = 'Victor', cash, emp}) {
    let sumSponsors = `${eu} ${rus}, 'unexpected sponsor'`;
    console.log(`
    We have a business. Owner: ${owner} , director: ${director}. Our budget: ${cash}. And our employers: ${emp}
    And we have a sponsors:
    ${sumSponsors}
    Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({
  owner: 'Sam', 
  cash: money, 
  emp: employersNames
});