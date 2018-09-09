import component from './home.component';
import './home.scss';

export default angular.module('home', [])
  .component('home', component)
  .name;