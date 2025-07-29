import { type RouteConfig, layout, route, index } from '@react-router/dev/routes';

export default [
    route('/sign-in', './routes/root/SignIn.tsx'),
    layout('./routes/layout/AppLayout.tsx', [
        index('./routes/root/Home.tsx'),
    ]),
] satisfies RouteConfig;