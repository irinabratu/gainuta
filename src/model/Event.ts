export class Event {
    Id: number;
    Title: string;
    Description: string;
    Address: string;
    StartDate: Date;
    EndDate: Date;

    constructor(Id: number, Title: string, Description: string,
        Address: string, StartDate: Date, EndDate: Date) {

        this.Id = Id;
        this.Title = Title;
        this.Description = Description;
        this.Address = Address;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
    }
}
