import employersNames from './employers.js';
import {eu, rus, money} from './sponsors' ;



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