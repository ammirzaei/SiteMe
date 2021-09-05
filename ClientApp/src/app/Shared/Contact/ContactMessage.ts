export class Message {
    FullName?: string;
    Email?: string;
    Message?: string;
    IP?: string;
}
export class AllMessages {
    contactID!: number;
    fullName!: string;
    email!: string;
    message!: string;
    ip!: string;
    createDate!: string;
    isShow!: boolean;
}