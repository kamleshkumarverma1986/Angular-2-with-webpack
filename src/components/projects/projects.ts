import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

const styles: string = require('./projects.scss');
const template: string = require('./projects.html');


@Component({
  selector: 'projects',
  styles: [styles],
  template,
  directives: [ROUTER_DIRECTIVES]
})

export class Projects {
}
