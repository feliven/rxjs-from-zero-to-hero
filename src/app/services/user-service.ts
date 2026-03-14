import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  subject$ = new BehaviorSubject<User>({ Id: '0', FirstName: '' });
}
