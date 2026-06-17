import { uid } from './useLocalStorage';

// Shared order store — product orders placed anywhere on the site land here and
// show up under "मेरे ऑर्डर" in the Palanhar app. Persisted in localStorage.
export const ORDERS_KEY = 'palanhar.app.orders';

function readOrders() {
  try {
    const raw = window.localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addOrder(order) {
  const entry = {
    id: order.id || `PAL-ORD-${uid().slice(-6).toUpperCase()}`,
    status: 'भुगतान प्राप्त',
    ...order,
  };
  const next = [entry, ...readOrders()];
  try {
    window.localStorage.setItem(ORDERS_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable — order kept in-memory only */
  }
  return entry;
}
