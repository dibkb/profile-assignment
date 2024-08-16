enum Category {
  "Smart Watch" = "Smart Watch",
  "Washing Machine" = "Washing Machine",
  "Air Conditioner" = "Air Conditioner",
  "Television" = "Television",
  "Mobile Phone" = "Mobile Phone",
  "Book" = "Book",
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
interface Filter {
  category: string[];
  rating: number[];
  assured: boolean;
}
export { type Product, Category, type Filter };
