import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpayhistoryComponent } from './lpayhistory.component';

describe('LpayhistoryComponent', () => {
  let component: LpayhistoryComponent;
  let fixture: ComponentFixture<LpayhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpayhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpayhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
