import {Component, OnInit} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {HeaderService} from '../header/header.service';

const styles: string = require('./header.scss');
const template: string = require('./header.html');

@Component({
	selector: 'header',
	styles: [styles],
	providers: [HeaderService],
	directives: [ROUTER_DIRECTIVES],
	template
})

export class HeaderComponent implements OnInit {
	
	public menus: Array<any>;
	constructor(private _headerService : HeaderService) {}

	ngOnInit(): any {
		this.menus = this._headerService.getMenus();
    }

    setActive(menuId: string) {
    	this._headerService.setActive(menuId);
    }

}