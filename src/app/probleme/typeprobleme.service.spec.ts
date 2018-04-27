import { TestBed, inject } from '@angular/core/testing';

import { TypeproblemeService } from './typeprobleme.service';
import { HttpClientModule } from '@angular/common/http';

describe('TypeproblemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TypeproblemeService]
    });
  });

  it('should be created', inject([TypeproblemeService], (service: TypeproblemeService) => {
    expect(service).toBeTruthy();
  }));
});
