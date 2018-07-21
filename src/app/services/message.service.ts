import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Product } from '../../model/Product';
 
@Injectable()
export class MessageService {
    private subject = new Subject<any>();
 
    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    sendProduct(product: Product) {
        this.subject.next(product);
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    getProduct(): Observable<Product> {
        return this.subject.asObservable();
    }

    clearCart() {
        this.subject.next();
    }
}