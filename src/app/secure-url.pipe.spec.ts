import { SecureUrlPipe } from './secure-url.pipe';

describe('SecureUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SecureUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
