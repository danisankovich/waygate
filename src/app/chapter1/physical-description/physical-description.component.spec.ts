import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalDescriptionComponent } from './physical-description.component';

describe('PhysicalDescriptionComponent', () => {
  let component: PhysicalDescriptionComponent;
  let fixture: ComponentFixture<PhysicalDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
