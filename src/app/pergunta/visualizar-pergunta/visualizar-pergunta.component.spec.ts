import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPerguntaComponent } from './visualizar-pergunta.component';

describe('VisualizarPerguntaComponent', () => {
  let component: VisualizarPerguntaComponent;
  let fixture: ComponentFixture<VisualizarPerguntaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarPerguntaComponent]
    });
    fixture = TestBed.createComponent(VisualizarPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
