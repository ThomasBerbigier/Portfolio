import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet3Component } from './projet3.component';

describe('Projet3Component', () => {
  let component: Projet3Component;
  let fixture: ComponentFixture<Projet3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projet3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Projet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
