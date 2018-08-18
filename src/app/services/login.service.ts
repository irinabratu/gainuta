import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {
  private subject = new Subject<any>();

  getLoginAction(): Observable<boolean> {
    return this.subject.asObservable();
  }

  sendLoginAction(refresh: boolean) {
    this.subject.next(refresh);
  }
}
