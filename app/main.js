import './vendors/bootstrap/less/bootstrap.less';

import './style/main.less';

import './vendors/jquery/dist/jquery.js';
import './vendors/angular/angular.min.js';
import './vendors/angular-route/angular-route.min.js';
import './vendors/angular-resource/angular-resource.min.js';
import './vendors/angular-animate/angular-animate.min.js';

import './phones/phones.json';

import './js/app.js';
import './js/filters.js';
import './js/services.js';
import './js/controllers.js';
import './js/animate.js';

// import entry from 'entry.html';
let entry = require('html!./entry.html');

document.getElementById('main-wrap').innerHTML = entry;
// angular.module('app', []);