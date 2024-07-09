import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescBlogComponent } from './desc-blog.component';

describe('DescBlogComponent', () => {
  let component: DescBlogComponent;
  let fixture: ComponentFixture<DescBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
