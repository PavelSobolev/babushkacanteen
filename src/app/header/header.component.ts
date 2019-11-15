import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    menuHide(): void {
        let hide = document.getElementsByClassName('collapse')[0];
        hide.classList.remove('show')
    }


    constructor() { }

    ngOnInit() {
        let items: HTMLCollection = document.getElementsByClassName('item');
        for (let i = 0; i < items.length; i++) {
            items.item(i).addEventListener('click', this.menuHide)
        }
    }

}
