enum Category {
  SmartWatch = "SmartWatch",
  WashingMachine = "WashingMachine",
  AirConditioner = "AirConditioner",
  Television = "Television",
  MobilePhone = "MobilePhone",
  Book = "Book",
}
interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  category: Category;
  assured: boolean;
}
export { type Product, Category };
