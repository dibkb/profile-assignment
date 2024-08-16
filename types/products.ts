enum Category {
  SmartWatch = "SmartWatch",
  WashingMachine = "WashingMachine",
  AirConditioner = "AirConditioner",
  Television = "Television",
  MobilePhone = "MobilePhone",
  Book = "Book",
}
interface Product {
  title: string;
  image: string;
  price: number;
  rating: number;
  category: Category;
}
export { type Product, Category };
