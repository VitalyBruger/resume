import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttestComponent } from './abouttest.component';

describe('AbouttestComponent', () => {
  let component: AbouttestComponent;
  let fixture: ComponentFixture<AbouttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
