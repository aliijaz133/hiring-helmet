import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenLength',
})
export class TokenLengthPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length < 6) {
      return value;
    }
    const prefix = value.slice(0, 4);
    const suffix = value.slice(-4);
    return `${prefix}...${suffix}`;
  }
}
