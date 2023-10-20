function pmtIni() {
  return {
   tax: 10,
   loan:100,
   months:10,
   decimals:3,

   get pmt() {
    const r = this.tax / 100; 
    const PMT = this.loan * r / (1 - Math.pow(1 + r, -this.months));

    return parseFloat(PMT.toFixed(this.decimals));
   },

   get finalValue() {
    console.log(this.pmt * this.months)
    return this.pmt * this.months
   },

   get gerarPreview(){
    data = []
    let finalValue = this.loan;
  
    for (let i = 0; finalValue > 0; i++) {
      pagou = i==0 ? 0: this.pmt;
      tem_que_pagar = parseFloat((finalValue - pagou).toFixed(this.decimals))
      tem_que_pagar_com_juros = parseFloat(((tem_que_pagar + tem_que_pagar*(this.tax/100))).toFixed(this.decimals))
      
      item = {
        mes: i,
        pagou: pagou,
        tem_que_pagar: tem_que_pagar,
        tem_que_pagar_com_juros: tem_que_pagar_com_juros
      };
      data.push(item);

      console.log(item)

      finalValue =  tem_que_pagar_com_juros;
    }

    return data;
   },

    init() {
     
    },

    
  }
}



