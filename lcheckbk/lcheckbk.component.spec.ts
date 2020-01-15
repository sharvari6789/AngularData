import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcheckbkComponent } from './lcheckbk.component';

describe('LcheckbkComponent', () => {
  let component: LcheckbkComponent;
  let fixture: ComponentFixture<LcheckbkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcheckbkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcheckbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
