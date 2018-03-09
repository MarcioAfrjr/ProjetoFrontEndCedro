import { TestBed, inject } from '@angular/core/testing';

import { ListaPratoService } from './lista-prato.service';

describe('ListaPratoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaPratoService]
    });
  });

  it('should be created', inject([ListaPratoService], (service: ListaPratoService) => {
    expect(service).toBeTruthy();
  }));
});
