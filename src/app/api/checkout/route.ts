import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

interface Product {
  title: string;
  price: number;
  dicountPercentage: number;
  qty: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { products } = body;

    if (!products || products.length === 0) {
      return NextResponse.json(
        { error: "No products in the cart" },
        { status: 400 }
      );
    }

    const lineItems = products.map((product: Product) => {
      const discount = product.dicountPercentage || 0;
      const discountedPrice = product.price - (product.price * discount) / 100;

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
          },
          unit_amount: Math.round(discountedPrice * 100), // Apply discounted price here
        },
        quantity: product.qty || 1,
      };
    });

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://final-hackathon-6316.vercel.app/";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
