import { TestBed } from '@angular/core/testing';

import { CubitHeaderInterceptor } from './cubit-header.interceptor';

describe('CubitHeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CubitHeaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CubitHeaderInterceptor = TestBed.inject(CubitHeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
