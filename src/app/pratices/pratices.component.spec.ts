import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticesComponent } from './pratices.component';

describe('PraticesComponent', () => {
  let component: PraticesComponent;
  let fixture: ComponentFixture<PraticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
