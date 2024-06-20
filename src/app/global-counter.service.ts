import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalCounterService {
  count: WritableSignal<number> = signal(0);

  constructor() {}

  increase() {
    this.count.update((prev) => prev + 1);
  }
  decrease() {
    this.count.update((prev) => prev - 1);
  }
}
