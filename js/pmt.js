function pmtIni() {
  return {
   tax: 10,
   loan:100,
   months:10,
   decimals:3,

   get pmt() {
    const r = this.tax / 100; 
    const PMT = this.loan * r / (1 - Math.pow(1 + r, -this.months));

    return parseFloat(PMT.toFixed(3));
   },

   get finalValue() {
    return this.pmt * this.months
   },

    init() {
     
    },

    
  }
}



