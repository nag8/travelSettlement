const SHEET = {
  debtor: {
    name: '債務者',
    row: {
      data: 2,
    },
    column : {
      name : 1,
    },
  },
};

function refreshSheet(sheetConfig, outList, startColumn, startRow){

  if(!outList[0].length) return;
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetConfig.name);

  startRow = startRow ? startRow : 2;
  startColumn = startColumn ? startColumn : 1;
  sheet.getRange(startRow, startColumn, sheet.getLastRow(), outList[0].length).clear();
  sheet.getRange(startRow, startColumn, outList.length, outList[0].length).setValues(outList);
}
