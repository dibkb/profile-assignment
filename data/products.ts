import { Product, Category } from "@/types/products";

const products: Product[] = [
  {
    id: "a567d14c-9a9d-4045-90b2-3f6940450ff8",
    title: "I Want to Eat Your Pancreas: The Complete Manga Collection",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/book/0/a/2/i-want-to-eat-your-pancreas-the-complete-manga-collection-original-imah2eegefpetrjp.jpeg?q=70",
    price: 228,
    rating: 4.3,
    category: Category.Book,
    assured: true,
  },
  {
    id: "d6b20455-d8fb-48ae-8363-c067a1c57be9",
    title: "The Picture of Dorian Gray  - By Miss & Chief",
    image:
      "https://rukminim2.flixcart.com/image/612/612/kst9gnk0/book/o/1/m/the-picture-of-dorian-gray-for-kids-llustrated-abridged-children-original-imag6apzuhhwp5cd.jpeg?q=70",
    price: 213,
    rating: 2.6,
    category: Category.Book,
    assured: false,
  },
  {
    id: "ca3ba7b1-3497-4ab5-bc5e-1407d06395bf",
    title:
      "LG OLED B2 164 cm (65 inch) OLED Ultra HD (4K) Smart WebOS TV Alpha77 Gen5 AI Processor, AI Picture",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/television/2/t/n/-original-imah2txtbv7xzmph.jpeg?q=70",
    price: 169999,
    rating: 3.6,
    category: Category.Television,
    assured: false,
  },
  {
    id: "07b4fb19-af1d-4e60-81b3-44bf1e61313a",
    title:
      "TCL S5500 79.97 cm (32 inch) Full HD LED Smart Google TV 2024 Edition with 1.5 GB RAM + 16 GB ROM",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/television/s/u/h/-original-imahfbgs8dwkz9yt.jpeg?q=70",
    price: 12999,
    rating: 4.1,
    category: Category.Television,
    assured: true,
  },
  {
    id: "9e148a7f-1b6c-45e6-bd32-2b903bf41502",
    title:
      "LG AI Convertible 6-in-1 Cooling 2024 Model 1.5 Ton 3 Star Split Dual Inverter HD Filter",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/f/c/m/-original-imagxuychhhw9qgh.jpeg?q=70",
    price: 36000,
    rating: 3.9,
    category: Category["Air Conditioner"],
    assured: false,
  },
  {
    id: "44a37d10-0874-47d6-adef-a452878f602e",
    title:
      "CARRIER 6-in-1 Flexicool 2023 Model 1.5 Ton 5 Star Split Inverter with Anti-Viral Guard & Smart Energy",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/f/i/e/-original-imagnyzqbrtygm8y.jpeg?q=70",
    price: 89200,
    rating: 4.1,
    category: Category["Air Conditioner"],
    assured: true,
  },
  {
    id: "050929b2-2436-497a-8ba9-617d00b4568a",
    title: "Apple iPhone 15 (Black, 128 GB)",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
    price: 70200,
    rating: 4.6,
    category: Category["Mobile Phone"],
    assured: true,
  },
  {
    id: "56566f43-a4b1-4ebf-a619-11ae59465aed",
    title: "The Time Machine",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/book/z/k/h/the-time-machine-deluxe-hardbound-edition-original-imagy326muyqragx.jpeg?q=70",
    price: 303,
    rating: 4.7,
    category: Category.Book,
    assured: true,
  },
  {
    id: "c2353a32-6062-4d5f-892c-cd275c7e9679",
    title: "SAMSUNG Galaxy S23 5G (Cream, 128 GB)",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/7/n/-original-imagzm8qzhpuwrak.jpeg?q=70",
    price: 44999,
    rating: 4.5,
    category: Category["Mobile Phone"],
    assured: true,
  },
  {
    id: "a83b0b78-6138-4f8d-92cf-28513dc6bb60",
    title: "REDMI 13C (Starfrost White, 128 GB)",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/f/a/-original-imahfk4xp4xcggyt.jpeg?q=70",
    price: 7699,
    rating: 4.3,
    category: Category["Mobile Phone"],
    assured: false,
  },
  {
    id: "08016234-4409-4428-9659-7d95fbd3c04c",
    title: "Apple Watch Series 9",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/5/f/u/-original-imagte4savzhddcs.jpeg?q=70",
    price: 39993,
    rating: 4.7,
    category: Category["Smart Watch"],
    assured: true,
  },
  {
    id: "b6eabd1d-b87f-4f8a-911d-05455751e40a",
    title: "vivo T3x 5G (Crimson Bliss, 128 GB)",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70",
    price: 13499,
    rating: 3.7,
    category: Category["Mobile Phone"],
    assured: false,
  },
  {
    id: "d37827f7-8256-478e-8949-c63e331e31be",
    title: "Metamorphosis",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/book/m/n/z/metamorphosis-original-imagw5kdg7hzyykm.jpeg?q=70",
    price: 125,
    rating: 4.5,
    category: Category.Book,
    assured: false,
  },
  {
    id: "759c12d2-8f24-4134-bff8-6a2169cdf71c",
    title: "SAMSUNG 2023 Model 2 Ton 3 Star Split Inverter AC",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/v/3/a/-original-imagmmmcr9q7g4fh.jpeg?q=70",
    price: 82990,
    rating: 3.5,
    category: Category["Air Conditioner"],
    assured: false,
  },
  {
    id: "866892dd-5bcb-4ad4-b9cf-917a518873ee",
    title: "The Martian",
    image:
      "https://rukminim2.flixcart.com/image/612/612/kvcpn680/book/x/a/e/the-martian-original-imag895wszccvrhh.jpeg?q=70",
    price: 500,
    rating: 4.6,
    category: Category.Book,
    assured: true,
  },
  {
    id: "5c009974-970d-4437-9be6-d13f3bce2081",
    title:
      "SAMSUNG 12 kg with Wi-Fi Enabled Fully Automatic Front Load Washing Machine with In-built Heater Black",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/washing-machine-new/f/s/a/12-650-wd12tp44dsb-tl-5-0-0094-600-82-samsung-850-original-imagqkr9kuwz5htj.jpeg?q=70",
    price: 109000,
    rating: 4.9,
    category: Category["Washing Machine"],
    assured: false,
  },
  {
    id: "df103a9f-434b-434a-a430-784da80eae0b",
    title:
      "LG 13/10 Kg Washer with Dryer AI Direct Drive &amp; DUAL Inverter Heat Pump, Fully Automatic Front-Loading",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/w/w/n/-original-imagxgnyjq6zqbhh.jpeg?q=70",
    price: 219910,
    rating: 3.5,
    category: Category["Washing Machine"],
    assured: false,
  },
  {
    id: "6012c74d-e46f-4e3e-aac5-693485bbea02",
    title: "realme Watch S2",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/o/c/6/-original-imah35ypxjs3c8yb.jpeg?q=70",
    price: 5299,
    rating: 2.7,
    category: Category["Smart Watch"],
    assured: false,
  },
  {
    id: "592c4f91-1997-4a7b-8000-1afe0ca93f06",
    title:
      "SAMSUNG Convertible 5-in-1 Cooling 2024 Model 1.5 Ton 3 Star Split Inverter AC  - White",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/6/a/j/-original-imahyqgjwwzcyy5c.jpeg?q=70",
    price: 34999,
    rating: 4.1,
    category: Category["Air Conditioner"],
    assured: true,
  },
  {
    id: "6b7b2638-2de6-4959-8e04-e89a6e70bcfe",
    title:
      "SAMSUNG 11 kg Fully Automatic Front Load Washing Machine with In-built Heater Black",
    image:
      "https://rukminim2.flixcart.com/image/612/612/ktq4l8w0/washing-machine-new/k/w/d/10-58-8-bosch10-kg-inverter-fully-automatic-front-loading-original-imag7yerznvxthu4.jpeg?q=70",
    price: 57999,
    rating: 4.1,
    category: Category["Washing Machine"],
    assured: true,
  },
  {
    id: "fcd26d93-1e88-4c60-8373-a4586db3754c",
    title: "SAMSUNG Galaxy Watch Ultra LTE",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/p/1/s/-original-imah2nhhpy6n5ggz.jpeg?q=70",
    price: 59999,
    rating: 4.1,
    category: Category["Smart Watch"],
    assured: true,
  },
  {
    id: "6103c70a-403b-4510-aff4-a0c8cc3b51a4",
    title: "Jurassic Park",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/book/j/4/u/jurassic-park-original-imahyghbfvwvbref.jpeg?q=70",
    price: 418,
    rating: 4.7,
    category: Category.Book,
    assured: false,
  },
  {
    id: "754ae001-037b-4486-97cd-590efa1e9801",
    title:
      "LG 8 kg 5 Star with Smart Inverter Technology, TurboDrum and Smart Diagnosis Fully Automatic Top Load",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/washing-machine-new/2/b/h/-original-imagx7qh8qzppe3s.jpeg?q=70",
    price: 19999,
    rating: 4.7,
    category: Category["Washing Machine"],
    assured: true,
  },
  {
    id: "5f715e21-4d29-439f-a218-f7508ab1feec",
    title: "Fastrack Revoltt FS1|1.83 Display|BT Calling",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70",
    price: 1199,
    rating: 3.8,
    category: Category["Smart Watch"],
    assured: false,
  },
  {
    id: "0a97e8ed-c78a-449d-b7d9-89250b2a3b91",
    title: "Noise Colorfit Icon 2 1.8'' Display with Bluetooth Call",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/e/w/m/-original-imagxp8utmyyysut.jpeg?q=70",
    price: 1399,
    rating: 4.1,
    category: Category["Smart Watch"],
    assured: true,
  },

  {
    id: "c0171ddd-f5de-4c77-835a-18cfaa9d5ef6",
    title: "Cloud Atlas",
    image:
      "https://rukminim2.flixcart.com/image/612/612/l29c9e80/book/g/g/i/cloud-atlas-original-imagdmz9gnszk2ja.jpeg?q=70",
    price: 380,
    rating: 4.4,
    category: Category.Book,
    assured: true,
  },
];
export { products };
