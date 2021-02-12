import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HphcHeadComponent } from './hphc-head.component';

describe('HphcHeadComponent', () => {
  let component: HphcHeadComponent;
  let fixture: ComponentFixture<HphcHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HphcHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HphcHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
