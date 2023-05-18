import { TestBed } from '@angular/core/testing';

import { EnvioCorreosService } from './envio-correos.service';

describe('EnvioCorreosService', () => {
  let service: EnvioCorreosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioCorreosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
