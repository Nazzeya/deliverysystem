import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaeiledProductComponent } from './detaeiled-product.component';

describe('DetaeiledProductComponent', () => {
  let component: DetaeiledProductComponent;
  let fixture: ComponentFixture<DetaeiledProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaeiledProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaeiledProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
