import { Currency } from "./currency.enum";
import { SquareMeasure } from "./squareMeasure.enum";

export interface Apartment {
  title: string;
  address: string;
  description: string;
  phone: string;
  price: number;
  currency: Currency;
  squareMeasure: SquareMeasure;
  square: number;
  bedRooms: string;
  bathrooms: string;
}
