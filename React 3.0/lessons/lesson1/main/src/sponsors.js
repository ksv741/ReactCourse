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

export {eu, rus, money};