import { TokenLengthPipe } from './token-length.pipe';

describe('TokenLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new TokenLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
