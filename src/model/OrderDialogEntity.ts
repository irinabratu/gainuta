import { ShoppingCartItemEntity } from "./ShoppingCartItemEntity";

export class OrderDialogEntity {
  Id: number;
  UserId: number;
  UserName: string;
  UserPhone: string;
  UserEmail: string;
  Amount: number;
  PlaceDate: Date;
  ShoppingCartItems: ShoppingCartItemEntity[];
}
