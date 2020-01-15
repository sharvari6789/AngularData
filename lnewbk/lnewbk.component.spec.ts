import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LnewbkComponent } from './lnewbk.component';

describe('LnewbkComponent', () => {
  let component: LnewbkComponent;
  let fixture: ComponentFixture<LnewbkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LnewbkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LnewbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
