import component from './login.component';
import './login.scss';

export default angular.module('login', [])
  .component('login', component)
  .name;