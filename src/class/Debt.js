class Debt{
  constructor(debtor, creditor, amount){
    this.debtor = debtor;
    this.creditor = creditor;
    this.amount = amount;
  }

  isSameCreditor(creditor){
    return this.creditor === creditor;
  }

  isSamePerson(){
    return this.debtor === this.creditor;
  }

  getDebtor(){
    return this.debtor;
  }

  getCreditor(){
    return this.creditor;
  }

  getAmount(){
    return this.amount;
  }
}