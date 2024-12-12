import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFormComponent } from './secondary-form.component';

describe('SecondaryFormComponent', () => {
  let component: SecondaryFormComponent;
  let fixture: ComponentFixture<SecondaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
