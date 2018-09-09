import routes from './app.routes';
import component from './app.component';

import loginModule from './login/login.module';
import homeModule from './home/home.module';
import dashboardModule from './dashboard/dashboard.module';
import menuModule from './menu/menu.module';

angular.module('app', [
  'ui.router',
  'ui.router.state.events',
  loginModule,
  homeModule,
  dashboardModule,
  menuModule
])
  .config(routes)
  .component('app', component)
  .constant({"API_URL": "http://localhost:8000/"});
