import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnketsListComponent } from './ankets-list.component';

describe('AnketsListComponent', () => {
  let component: AnketsListComponent;
  let fixture: ComponentFixture<AnketsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnketsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
