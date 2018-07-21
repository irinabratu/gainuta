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
            "../../assets/images/shop/gaina1.jpg"));
            
        this.mockup.push(new Product(
            2,
			"Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque",
			"commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a",
			78.65,
			"tincidunt",
			true,
			false,
			"../../assets/images/shop/gaina2.jpg"
        ));

        this.mockup.push(new Product(
            3,
			"eros turpis non enim.",
			"Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu.",
			35.71,
			"Suspendisse",
			false,
			false,
			"../../assets/images/shop/gaina3.jpg"
        ));

        this.mockup.push(new Product(
            4,
			"metus. Vivamus euismod urna. Nullam lobortis quam",
			"suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo",
			20.10,
			"ut, nulla.",
			true,
			true,
			"../../assets/images/shop/gaina4.jpg"
        ));

    }

    getProducts(): Product[] {

        return this.mockup;
    }
}
/*
		[
			5,
			"est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed",
			"mi enim, condimentum eget, volutpat",
			"$0.63",
			"vulputate",
			"1",
			"1",
			"magna a"
		],
		[
			6,
			"in consectetuer ipsum nunc id",
			"non",
			"$14.73",
			"enim.",
			"1",
			"1",
			"mauris eu elit. Nulla facilisi. Sed neque."
		],
		[
			7,
			"sit amet, consectetuer",
			"neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in,",
			"$8.52",
			"gravida sagittis. Duis",
			"1",
			"1",
			"Sed id risus quis diam luctus lobortis."
		],
		[
			8,
			"sem",
			"consectetuer euismod est arcu ac orci. Ut semper pretium neque.",
			"$79.54",
			"netus et malesuada",
			"1",
			"1",
			"nisi. Cum sociis"
		],
		[
			9,
			"consequat nec, mollis vitae, posuere",
			"sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget",
			"$95.32",
			"cursus",
			"1",
			"1",
			"Aliquam erat volutpat."
		],
		[
			10,
			"consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus",
			"ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi",
			"$40.62",
			"lorem, sit amet",
			"1",
			"1",
			"metus urna convallis erat, eget tincidunt dui augue"
		],
		[
			11,
			"lectus convallis",
			"viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel",
			"$84.31",
			"amet, risus. Donec",
			"1",
			"1",
			"sapien, cursus in, hendrerit consectetuer,"
		],
		[
			12,
			"mattis ornare, lectus ante dictum mi,",
			"odio, auctor vitae, aliquet nec, imperdiet",
			"$3.56",
			"dapibus id,",
			"1",
			"1",
			"Fusce mi lorem,"
		],
		[
			13,
			"sociosqu ad litora torquent per conubia",
			"nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
			"$52.88",
			"Nunc ut erat.",
			"1",
			"1",
			"nunc. In at"
		],
		[
			14,
			"amet ante. Vivamus non lorem vitae",
			"metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit",
			"$21.03",
			"lectus",
			"1",
			"1",
			"condimentum eget, volutpat ornare,"
		],
		[
			15,
			"ullamcorper. Duis cursus, diam at pretium aliquet, metus urna",
			"sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices.",
			"$81.88",
			"libero at auctor",
			"1",
			"1",
			"tellus eu augue porttitor interdum."
		],
		[
			16,
			"eget, ipsum. Donec",
			"Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget",
			"$58.08",
			"placerat.",
			"1",
			"1",
			"molestie"
		],
		[
			17,
			"sagittis lobortis mauris. Suspendisse aliquet molestie tellus.",
			"sem elit, pharetra ut, pharetra",
			"$3.36",
			"natoque penatibus et",
			"1",
			"1",
			"facilisis non,"
		],
		[
			18,
			"dolor. Nulla semper tellus id nunc interdum",
			"tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec",
			"$46.96",
			"cursus in, hendrerit",
			"1",
			"1",
			"adipiscing ligula. Aenean gravida nunc sed pede. Cum"
		],
		[
			19,
			"consectetuer adipiscing elit. Aliquam",
			"feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet.",
			"$43.45",
			"ut, pellentesque eget,",
			"1",
			"1",
			"ut odio vel est"
		],
		[
			20,
			"erat neque non",
			"metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et",
			"$90.45",
			"eros nec",
			"1",
			"1",
			"volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus"
		],
		[
			21,
			"Donec fringilla. Donec feugiat metus sit amet ante.",
			"fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a,",
			"$92.77",
			"diam.",
			"1",
			"1",
			"pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi."
		],
		[
			22,
			"ante lectus convallis est,",
			"at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate",
			"$44.51",
			"dolor. Fusce",
			"1",
			"1",
			"arcu et pede. Nunc sed orci lobortis"
		],
		[
			23,
			"blandit at, nisi. Cum",
			"dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla.",
			"$8.62",
			"Vestibulum ante ipsum",
			"1",
			"1",
			"mauris. Integer sem"
		],
		[
			24,
			"nulla at",
			"molestie",
			"$86.28",
			"sapien.",
			"1",
			"1",
			"pharetra, felis eget varius"
		],
		[
			25,
			"posuere cubilia Curae; Donec tincidunt. Donec vitae",
			"a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet,",
			"$71.76",
			"cursus luctus, ipsum",
			"1",
			"1",
			"Aliquam gravida mauris ut mi. Duis risus"
        ]
        */
