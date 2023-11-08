export async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await res.json();
  return data;
}
