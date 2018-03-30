import { ToastOptions } from 'ng2-toastr';

export class ToastrCustomOption extends ToastOptions {
    animate = 'flyRight';
    newestOnTop = false;
    showCloseButton = true;
    positionClass = 'toast-bottom-right';
    maxShown = 3;
    toastLife = 4000;
}
