import React from 'react';
import ReactDOM from 'react-dom';
import { i18n, init as i18nInit } from 'src/i18n';
import { AuthToken } from './modules/auth/authToken';
import TenantService from './modules/tenant/tenantService';

(async function () {
  AuthToken.applyFromLocationUrlIfExists();
  await TenantService.fetchAndApply();
  await i18nInit();

  const App = require('./App').default;
  document.title = i18n('app.title');
  ReactDOM.render(<App />, document.getElementById('root'));
})();
