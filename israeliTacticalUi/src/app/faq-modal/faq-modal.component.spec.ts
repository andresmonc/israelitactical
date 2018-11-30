import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQMODALComponent } from './faq-modal.component';

describe('FAQMODALComponent', () => {
  let component: FAQMODALComponent;
  let fixture: ComponentFixture<FAQMODALComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQMODALComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQMODALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
