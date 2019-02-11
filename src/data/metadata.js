const apis = {
  sheet: {
    name: 'Sheet',
    description:
      'Turn your Google Spreadsheet into JSON with a simple API call',
  },
  keyvalue: {
    name: 'Key Value',
    description: 'A serverless key-value database backed by DynamoDB',
  },
  log: {
    name: 'Log',
    description: 'A simple log database backed by Google Spreadsheet',
  },
};

export default apis;

export const all = Object.keys(apis).map(key => ({ key: key, ...apis[key] }));
