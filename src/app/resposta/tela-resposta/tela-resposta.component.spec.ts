import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRespostaComponent } from './tela-resposta.component';

describe('TelaRespostaComponent', () => {
  let component: TelaRespostaComponent;
  let fixture: ComponentFixture<TelaRespostaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaRespostaComponent]
    });
    fixture = TestBed.createComponent(TelaRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
