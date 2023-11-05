import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProByTypeComponent } from './pro-by-type.component';

describe('ProByTypeComponent', () => {
  let component: ProByTypeComponent;
  let fixture: ComponentFixture<ProByTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProByTypeComponent]
    });
    fixture = TestBed.createComponent(ProByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
