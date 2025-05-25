import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBuilderComponent } from './component-builder.component';

describe('ComponentBuilderComponent', () => {
  let component: ComponentBuilderComponent;
  let fixture: ComponentFixture<ComponentBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
