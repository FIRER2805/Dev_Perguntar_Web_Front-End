import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRespostasComponent } from './arvore-respostas.component';

describe('ArvoreRespostasComponent', () => {
  let component: ArvoreRespostasComponent;
  let fixture: ComponentFixture<ArvoreRespostasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArvoreRespostasComponent]
    });
    fixture = TestBed.createComponent(ArvoreRespostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
