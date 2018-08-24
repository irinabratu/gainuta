import { Event } from '../model/Event';

export class EventsMockup {

    mockup: Event[];

    constructor() {

        this.mockup = new Array<Event>();

        this.mockup.push(new Event(
            1,
            'Biodiversity Seminars 2017 - Day 1',
            'Join us for readings of this year\'s groundbreaking publications in the field of biodiversity. Special guest: Prof. Brian Leander. Cookies and coffee will be provided in the main hall at 11:30am. To update the title/speaker changes, please contact Katie Beall.',
            'Muzeul Antipa',
            new Date(2017, 10, 21, 8, 0, 0),
            new Date(2017, 10, 21, 14, 30, 0)
        ));

        this.mockup.push(new Event(
            2,
            'Biodiversity Seminars 2017 - Day 2',
            'Day two of the Biodiversity Seminars event will open the forum to our audience and lead off their questions and concerns. Prof. Diane Srivastava of the Srivastava Lab will be leading the talk. Dessert and refreshments will be provided in the main hall at 12:00pm.',
            'Muzeul Antipa',
            new Date(2017, 9, 15, 16, 0, 0),
            new Date(2017, 9, 15, 21, 0, 0)
        ));

        this.mockup.push(new Event(
            3,
            'Morning Brews & Views',
            'Enjoy free samples of our latest brews while overlooking the beautiful sites of our city. Plenty of iced and hot teas, plus gourmet coffee drinks to perk up your day. Complimentary biscuits for everyone!',
            'The Teapot and Brew Club',
            new Date(2017, 6, 8, 10, 0, 0),
            new Date(2017, 6, 8, 18, 0, 0)
        ));

        this.mockup.push(new Event(
            4,
            'Prep session',
            'Time for another monthly prep session! This is where we figure out the details of our next tree planting event. All suggestions are welcome, bring your friends!',
            'GreenTea Teahouse, Dr. Burghelea 24, Sector 2, Bucharest',
            new Date(2017, 2, 25, 9, 0, 0),
            new Date(2017, 2, 25, 15, 0, 0)
        ));

        this.mockup.push(new Event(
            5,
            'Let\'s plant!',
            'This is it! Dates have been set, coffee has been brewed, volonteers have gathered - all good to go! Wear warm clothes, we plant rain or shine!',
            'Plant-a-lot HQ, Bd.Vasile Milea 1G, Sector 6, Bucharest',
            new Date(2017, 11, 25, 10, 0, 0),
            new Date(2017, 11, 25, 17, 0, 0)
        ));

        this.mockup.push(new Event(
            6,
            'Evenings in the Park',
            'We invite you to listen to live bands play beautiful music in the park. Enjoy the sounds of Laureen Davis and the Kings, and enjoy wine tastings hosted by 5th Ave Wines and Spirits.',
            'Herastrau Park, Japanese Island',
            new Date(2018, 5, 11, 16, 0, 0),
            new Date(2018, 5, 11, 20, 0, 0)
        ));
    }

    getEvents(): Event[] {

        return this.mockup;
    }
}
