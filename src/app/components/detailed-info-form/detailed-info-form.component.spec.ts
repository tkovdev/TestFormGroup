import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedInfoFormComponent } from './detailed-info-form.component';

describe('DetailedInfoFormComponent', () => {
  let component: DetailedInfoFormComponent;
  let fixture: ComponentFixture<DetailedInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedInfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
