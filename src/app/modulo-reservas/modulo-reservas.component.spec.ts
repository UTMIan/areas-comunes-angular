import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloReservasComponent } from './modulo-reservas.component';

describe('ModuloReservasComponent', () => {
  let component: ModuloReservasComponent;
  let fixture: ComponentFixture<ModuloReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloReservasComponent]
    });
    fixture = TestBed.createComponent(ModuloReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
