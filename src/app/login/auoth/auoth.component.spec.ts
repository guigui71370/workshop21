import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuothComponent } from './auoth.component';

describe('AuothComponent', () => {
  let component: AuothComponent;
  let fixture: ComponentFixture<AuothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
