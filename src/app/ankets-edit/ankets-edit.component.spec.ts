import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketsEditComponent } from './ankets-edit.component';

describe('AnketsEditComponent', () => {
  let component: AnketsEditComponent;
  let fixture: ComponentFixture<AnketsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
