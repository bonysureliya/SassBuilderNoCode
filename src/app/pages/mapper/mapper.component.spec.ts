import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapperComponent } from './mapper.component';

describe('MapperComponent', () => {
  let component: MapperComponent;
  let fixture: ComponentFixture<MapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
