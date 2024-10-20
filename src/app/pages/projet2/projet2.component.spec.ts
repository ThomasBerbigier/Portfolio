import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projet2Component } from './projet2.component';

describe('Projet2Component', () => {
  let component: Projet2Component;
  let fixture: ComponentFixture<Projet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projet2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Projet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
