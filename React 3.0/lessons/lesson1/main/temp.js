function makeBusiness(owner, director, cash, emp) {
  director = director || 'Victor';
  var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
  console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
  emp);
  console.log('And we have a sponsors: ');
  console.log.apply(null, sumSponsors);
  console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}

makeBusiness.apply(null, ['Sam', null, money, employersNames]);