import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderCompleteComponent } from './oder-complete.component';

describe('OderCompleteComponent', () => {
  let component: OderCompleteComponent;
  let fixture: ComponentFixture<OderCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OderCompleteComponent]
    });
    fixture = TestBed.createComponent(OderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
