const products = [
  {
    image_url: null,
    name: "Любительская селфи-палка",
    price: 500,
    id: 1
  },
  {
    image_url: "https://a.allegroimg.com/original/11d1cd/fc5c456547c38243959d9094bcf1/SELFIE-STICK-TRIPOD-STATYW-DO-SAMSUNG-XIAOMI-APPLE",
    name: "Профессиональная селфи-палка",
    price: 1500,
    id: 2
  },
  {
    image_url: "https://ae04.alicdn.com/kf/HTB1WBN4nlyWBuNkSmFPq6xguVXaC/2021.jpg",
    name: "Непотопляемая селфи-палка",
    price: 2500,
    id: 3
  },
  {
    image_url: "https://ae01.alicdn.com/kf/H6cf53ebe2e1e47a6b3f09c0ef983ee75W.jpg",
    name: "Селфи-палка «Следуй за мной»",
    price: 1500,
    id: 4
  }
]

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 1000);
  });
}