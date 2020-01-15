import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LnewbkcpyComponent } from './lnewbkcpy.component';

describe('LnewbkcpyComponent', () => {
  let component: LnewbkcpyComponent;
  let fixture: ComponentFixture<LnewbkcpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LnewbkcpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LnewbkcpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
