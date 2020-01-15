import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjourneyComponent } from './pjourney.component';

describe('PjourneyComponent', () => {
  let component: PjourneyComponent;
  let fixture: ComponentFixture<PjourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
