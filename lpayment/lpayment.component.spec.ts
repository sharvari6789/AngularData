import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpaymentComponent } from './lpayment.component';

describe('LpaymentComponent', () => {
  let component: LpaymentComponent;
  let fixture: ComponentFixture<LpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
