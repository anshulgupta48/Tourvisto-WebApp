import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY, {
  apiVersion: "2025-07-30.basil",
});

export const createProduct = async ( tripId: string, name: string, description: string, images: string[],  price:number ) => {
    const product = await stripe.products.create({ name, description, images });
    const priceObject = await stripe.prices.create({ product: product.id, unit_amount: price * 100, currency: 'usd' });

    const paymentLink = await stripe.paymentLinks.create({
        line_items: [{ price: priceObject.id, quantity: 1}],
        metadata: { tripId },
        after_completion: {
            type: 'redirect',
            redirect: {
                url: `${import.meta.env.VITE_BASE_URL}/trip/${tripId}/success`
            }
        }
    })

    return paymentLink;
};