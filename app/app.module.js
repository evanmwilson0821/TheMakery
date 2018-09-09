import AppRoutes from './app.routes.js';
import AppController from './app.controller.js';

import loginModule from './login/login.module';
import homeModule from './home/home.module';
import dashboardModule from './dashboard/dashboard.module';

angular.module('app', [
  'ui.router',
  'ui.router.state.events',
  loginModule,
  homeModule,
  dashboardModule
])
  .config(AppRoutes)
  .controller('AppController', AppController)
  .constant({"API_URL": "http://localhost:8000/"});
