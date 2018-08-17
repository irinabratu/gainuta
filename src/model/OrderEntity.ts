import { ShoppingCartItemEntity } from "./ShoppingCartItemEntity";

export class OrderEntity {
  Id: number;
  UserId: number;
  Amount: number;
  PlaceDate: Date;
  Items: ShoppingCartItemEntity[]
}
