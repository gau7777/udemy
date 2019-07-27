import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenndingComponent } from './pennding.component';

describe('PenndingComponent', () => {
  let component: PenndingComponent;
  let fixture: ComponentFixture<PenndingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenndingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
