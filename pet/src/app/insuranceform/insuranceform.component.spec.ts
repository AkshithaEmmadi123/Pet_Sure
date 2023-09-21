import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceformComponent } from './insuranceform.component';

describe('InsuranceformComponent', () => {
  let component: InsuranceformComponent;
  let fixture: ComponentFixture<InsuranceformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceformComponent]
    });
    fixture = TestBed.createComponent(InsuranceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
