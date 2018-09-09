import AppRoutes from './app.routes.js';
import AppController from './app.controller.js';
import loginModule from './login/login.module';
import homeModule from './home/home.module';

angular.module('app', [
  'ui.router',
  'ui.router.state.events',
  loginModule,
  homeModule
])

angular.module('app').config(AppRoutes);
angular.module('app').controller('AppController', AppController);
