// app/routes/proxy/shop.jsx

import { json } from '@remix-run/node';

export const loader = async ({ request }) => {
  const shop = request.headers.get("x-shopify-shop-domain"); // "happy-mini.myshopify.com"

  return json({
    message: `Hello from proxy for ${shop}!`,
  });
};

export default function ProxyShopPage() {
  return <p>This route is for proxy responses only.</p>;
}
