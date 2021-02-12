import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPracticeComponent } from './json-practice.component';

describe('JsonPracticeComponent', () => {
  let component: JsonPracticeComponent;
  let fixture: ComponentFixture<JsonPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
