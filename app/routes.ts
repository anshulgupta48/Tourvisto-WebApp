import { type RouteConfig, layout, route, index } from '@react-router/dev/routes';

export default [
    route('/api/create-trip', './routes/api/createTrip.ts'),
    route('/sign-in', './routes/root/SignIn.tsx'),
    layout('./routes/layout/AppLayout.tsx', [
        index('./routes/root/Home.tsx'),
        route('/trip/:tripId', './routes/root/TripDetails.tsx'),
        route('/trip/:tripId/success', './routes/root/PaymentSuccess.tsx'),
    ]),
] satisfies RouteConfig;