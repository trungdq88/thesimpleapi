const apis = {
  sheet: {
    name: 'Sheet',
    description:
      'Turn your Google Spreadsheet into JSON with a simple API call.',
  },
  notify: {
    name: 'Notify',
    description: 'Send you a notification via Email, Slack, SMS...',
  },
};

export default apis;

export const all = Object.keys(apis).map(key => ({ key: key, ...apis[key] }));
