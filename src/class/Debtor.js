class Debtor{
  constructor(debt){
    this.debtor = debt.getDebtor();
    this.debtList = [debt];
    this.creditorList = [debt.getCreditor()];
  }

  isSameDebtor(debt){
    return this.debtor === debt.getDebtor();
  }

  addDebt(debt){
    this.debtList.push(debt);

    const creditor = debt.getCreditor();
    
    if(!this.creditorList.includes(creditor)) this.creditorList.push(creditor);
  }

  getOutList(){
    const text = this.creditorList.map(creditor => {

      const totalAmount = this.debtList.reduce((totalAmount, debt) => {
        if(debt.isSameCreditor(creditor)) totalAmount += debt.getAmount();
        return totalAmount;
      }, 0);

      return `# ${creditor}`
        + `\n${totalAmount}`;
    }).join('\n');

    return [
      this.debtor,
      text
    ];
  }
}