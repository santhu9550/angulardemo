import { ComponentFixture, TestBed } from '@angular/core/testing';

import { databinding } from './databinding.component';

describe('databinding', () => {
  let component: databinding;
  let fixture: ComponentFixture<databinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ databinding ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(databinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
