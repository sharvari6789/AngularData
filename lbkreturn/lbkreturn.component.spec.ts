import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbkreturnComponent } from './lbkreturn.component';

describe('LbkreturnComponent', () => {
  let component: LbkreturnComponent;
  let fixture: ComponentFixture<LbkreturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbkreturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbkreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
