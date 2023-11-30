import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPerguntaComponent } from './criar-pergunta.component';

describe('CriarPerguntaComponent', () => {
  let component: CriarPerguntaComponent;
  let fixture: ComponentFixture<CriarPerguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarPerguntaComponent]
    });
    fixture = TestBed.createComponent(CriarPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
