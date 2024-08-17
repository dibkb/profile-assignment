enum Category {
  "Smart Watch" = "Smart Watch",
  "Washing Machine" = "Washing Machine",
  "Air Conditioner" = "Air Conditioner",
  "Television" = "Television",
  "Mobile Phone" = "Mobile Phone",
  "Book" = "Book",
}
enum Sort {
  "Relevance" = "Relevance",
  "Rating" = "Rating",
  "Price -- High to Low" = "Price -- High to Low",
  "Price -- Low to High" = "Price -- Low to High",
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
export { type Product, Category, type Filter, Sort };
