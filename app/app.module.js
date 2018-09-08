import { AppRoutes } from './app.routes.js';
import { AppController } from './app.controller.js';

angular.module('app', [
  'ui.router',
  'ui.router.state.events'
])

angular.module('app').config(AppRoutes);
angular.module('app').controller('AppController', AppController);
