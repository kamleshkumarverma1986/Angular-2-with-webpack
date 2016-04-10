import {Component} from 'angular2/core';

const styles: string = require('./header.scss');
const template: string = require('./header.html');

@Component({
	selector: 'header',
	styles: [styles],
	template
})

export class HeaderComponent {}