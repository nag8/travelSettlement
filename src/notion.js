const CONFIG = {
  notion: {
    token: '',
    apiVersion: '2022-02-22',
    databaseId: '',
  },
};

function init(){
  const configSheet = SpreadsheetApp.getActive().getSheetByName('config');
  CONFIG.notion.token = configSheet.getRange('B2').getValue();
  CONFIG.notion.databaseId = configSheet.getRange('B3').getValue();
}

function getDatabase() {
  const url = `https://api.notion.com/v1/databases/${CONFIG.notion.databaseId}/query`;

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CONFIG.notion.token}`,
      'Notion-Version': CONFIG.notion.apiVersion,
    },
  }
  const res = UrlFetchApp.fetch(url, options);
  return JSON.parse(res.getContentText()).results;
}

function getUserName(userId){
  const url = `https://api.notion.com/v1/users/${userId}`;

  const options = {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${CONFIG.notion.token}`,
      'Notion-Version': CONFIG.notion.apiVersion,
    },
  }
  const res = UrlFetchApp.fetch(url, options);
  return JSON.parse(res.getContentText())?.name;
}