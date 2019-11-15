import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopOrderComponent } from './pop-order.component';

describe('PopOrderComponent', () => {
    let component: PopOrderComponent;
    let fixture: ComponentFixture<PopOrderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PopOrderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PopOrderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
