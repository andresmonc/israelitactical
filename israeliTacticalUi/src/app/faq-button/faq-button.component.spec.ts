import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQButtonComponent } from './faq-button.component';

describe('FAQButtonComponent', () => {
  let component: FAQButtonComponent;
  let fixture: ComponentFixture<FAQButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
