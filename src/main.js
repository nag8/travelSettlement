function main(){
  init();
  const data = getDatabase();
  const debtorList = data.reduce((debtorList, row) => {

    row.properties.pay_for.people.forEach(pay_for_person => {
      const debt = new Debt(
        pay_for_person.name,
        row.properties.payer.people[0]?.name,
        row.properties.amount.number / row.properties.pay_for.people.length
      );
      let debtor = debtorList.find(debtor => debtor.isSameDebtor(debt));
      if(!debtor){
        debtorList.push(new Debtor(debt));
      }else{
        debtor.addDebt(debt);
      }
    });
    return debtorList;
  }, []);

  const outList = debtorList.map(debtor => debtor.getOutList());
  refreshSheet(
    SHEET.debtor,
    outList
  );

}
