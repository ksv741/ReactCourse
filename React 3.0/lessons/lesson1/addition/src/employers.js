class Employers{
  constructor(...names){
    this.names = names;
  }
  filt(){
    return this.names.map((item) => {return item.toLowerCase().trim();}).filter((name) => {return name.length > 0});
  }
  getNames(){
    console.log(this.names);
  }
}

export default Employers;