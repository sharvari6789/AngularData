import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbkissueComponent } from './lbkissue.component';

describe('LbkissueComponent', () => {
  let component: LbkissueComponent;
  let fixture: ComponentFixture<LbkissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbkissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbkissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
