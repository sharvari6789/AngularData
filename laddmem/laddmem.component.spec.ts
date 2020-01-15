import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddmemComponent } from './laddmem.component';

describe('LaddmemComponent', () => {
  let component: LaddmemComponent;
  let fixture: ComponentFixture<LaddmemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaddmemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaddmemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
