import { Observer } from 'rxjs';

export class CustomObserver implements Observer<number> {
  next(data: number) {
    console.log('next:', data);
  }
  error(error: string) {
    console.log('error:', error);
  }
  complete() {
    console.log('complete');
  }
}
