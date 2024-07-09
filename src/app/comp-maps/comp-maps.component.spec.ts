import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMapsComponent } from './comp-maps.component';

describe('CompMapsComponent', () => {
  let component: CompMapsComponent;
  let fixture: ComponentFixture<CompMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompMapsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
