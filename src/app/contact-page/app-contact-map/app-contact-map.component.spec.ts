import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactMapComponent } from './app-contact-map.component';

describe('AppContactMapComponent', () => {
  let component: AppContactMapComponent;
  let fixture: ComponentFixture<AppContactMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
