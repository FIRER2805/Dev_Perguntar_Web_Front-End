import { TestBed } from '@angular/core/testing';

import { RespostaService } from './resposta-service.service';

describe('RespostaServiceService', () => {
  let service: RespostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespostaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
