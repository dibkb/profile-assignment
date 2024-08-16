enum Category {
  SmartWatch = "Smart Watch",
  WashingMachine = "Washing Machine",
  AirConditioner = "Air Conditioner",
  Television = "Television",
  MobilePhone = "Mobile Phone",
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
