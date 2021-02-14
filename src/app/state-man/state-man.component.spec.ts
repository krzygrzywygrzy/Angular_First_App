import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManComponent } from './state-man.component';

describe('StateManComponent', () => {
  let component: StateManComponent;
  let fixture: ComponentFixture<StateManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
