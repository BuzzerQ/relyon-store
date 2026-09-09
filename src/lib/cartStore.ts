export interface CartItem {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  quantity: number;
}

const CART_KEY = "relyon_cart";

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(CART_KEY);
    if (!data) return [];

    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return [];

    // Produk digital hanya perlu satu lisensi/item per produk.
    return parsed
      .filter((item) => item && typeof item.id === "string")
      .map((item) => ({ ...item, quantity: 1 }));
  } catch {
    localStorage.removeItem(CART_KEY);
    return [];
  }
};

export const saveCart = (cart: CartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
};

export const addToCart = (product: Omit<CartItem, "quantity">) => {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (!existing) {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

export const removeFromCart = (id: string) => {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
};

export const clearCart = () => {
  saveCart([]);
};
