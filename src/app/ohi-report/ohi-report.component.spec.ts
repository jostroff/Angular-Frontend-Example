import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhiReportComponent } from './ohi-report.component';

describe('JsonPracticeComponent', () => {
  let component: OhiReportComponent;
  let fixture: ComponentFixture<OhiReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhiReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
