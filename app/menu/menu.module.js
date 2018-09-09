import component from './menu.component';
import './menu.scss';

export default angular.module('menu', [])
  .component('menuBar', component)
  .name;