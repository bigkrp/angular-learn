import './vendors/bootstrap/less/bootstrap.less';

import './style/main.less';

import angular from 'angular';

// import entry from 'entry.html';
let entry = require('html!./entry.html');

document.getElementById('main-wrap').innerHTML = entry;
// angular.module('app', []);