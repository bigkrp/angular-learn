import './vendors/bootstrap/less/bootstrap.less';

import './style/main.less';

import './vendors/angular/angular.min.js';

import './phones/phones.json';

import './js/controllers.js';

// import entry from 'entry.html';
let entry = require('html!./entry.html');

document.getElementById('main-wrap').innerHTML = entry;
// angular.module('app', []);