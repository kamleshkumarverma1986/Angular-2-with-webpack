import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

const styles: string = require('./container.scss');
const template: string = require('./container.html');

@Component({
	selector: 'container',
	styles: [styles],
	template,
	directives: [ROUTER_DIRECTIVES]
})

export class ContainerComponent {}
