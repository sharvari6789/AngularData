import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbkissuelistComponent } from './lbkissuelist.component';

describe('LbkissuelistComponent', () => {
  let component: LbkissuelistComponent;
  let fixture: ComponentFixture<LbkissuelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbkissuelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbkissuelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
