import { Product } from '../model/Product';

export class ProductsMockup {

    mockup: Product[];

    constructor() {

        this.mockup = new Array<Product>();

        this.mockup.push(new Product(
            1,
			"ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor",
			"rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras",
			64.38,
			"felis",
			true,
            true,
			"../../assets/images/shop/gaina1.jpg",
			0));
            
        this.mockup.push(new Product(
            2,
			"Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque",
			"commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a",
			78.65,
			"tincidunt",
			true,
			false,
			"../../assets/images/shop/gaina2.jpg",
			0
        ));

        this.mockup.push(new Product(
            3,
			"eros turpis non enim.",
			"Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu.",
			35.71,
			"Suspendisse",
			false,
			false,
			"../../assets/images/shop/gaina3.jpg",
			0
        ));

        this.mockup.push(new Product(
            4,
			"metus. Vivamus euismod urna. Nullam lobortis quam",
			"suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo",
			20.10,
			"ut, nulla.",
			true,
			true,
			"../../assets/images/shop/gaina4.jpg",
			0
        ));
    }

    getProducts(): Product[] {

        return this.mockup;
    }
}
