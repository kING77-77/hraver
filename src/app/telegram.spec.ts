import { TestBed } from '@angular/core/testing';

import { TelegramService} from './telegram';

describe('TelegramService', () => {
  let service: TelegramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelegramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
