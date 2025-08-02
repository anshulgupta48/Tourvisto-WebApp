import { type ActionFunctionArgs } from 'react-router';
import { createProduct } from '~/lib/stripe';

export const action = async ({ request }: ActionFunctionArgs) => {
    const { tripId, title, description, price } = await request.json();

    try {
        const paymentLink = await createProduct( tripId, title, description, ['https://res.cloudinary.com/diwaqnrmg/image/upload/v1754129032/handpicked-trip-banner-5_rqccpn.png'], price );
        return paymentLink;
    } catch (error) {
        console.error('Error while Creating Trip:', error);
    }
};