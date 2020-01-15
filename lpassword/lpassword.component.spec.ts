import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpasswordComponent } from './lpassword.component';

describe('LpasswordComponent', () => {
  let component: LpasswordComponent;
  let fixture: ComponentFixture<LpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
