export class MessageEntity {

    Id: number;
    Name: string;
    Email: string;
    Phone: string;
    Message: string;
    Answer: string;
    CreateDateTime: Date;
    UpdateDateTime: Date;

    constructor(Id: number, Name: string, Email: string,
        Phone: string, Message: string, Answer: string, 
        CreateDateTime: Date, UpdateDateTime: Date) {

        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
        this.Phone = Phone;
        this.Message = Message;
        this.Answer = Answer;
        this.CreateDateTime = CreateDateTime;
        this.UpdateDateTime = UpdateDateTime;
    }
}
