import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactHeaderComponent } from './app-contact-header.component';

describe('AppContactHeaderComponent', () => {
  let component: AppContactHeaderComponent;
  let fixture: ComponentFixture<AppContactHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
