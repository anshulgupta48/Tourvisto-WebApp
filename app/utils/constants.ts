import { FeaturedTripBanner1, FeaturedTripBanner2, FeaturedTripBanner3, FeaturedTripBanner4, FeaturedTripBanner5, FeaturedTripBanner6, HandpickedTripBanner1, HandpickedTripBanner2, HandpickedTripBanner3, HandpickedTripBanner4, HandpickedTripBanner5, HandpickedTripBanner6, HandpickedTripBanner7, HandpickedTripBanner8 } from '~/assets/export';

// <======== Exporting Constants for Home-Page ========>
export const featuredTripsDefaultData = [
    { title: 'Barcelona Days', banner: FeaturedTripBanner1, totalActivities: 142, rating: 4.3 },
    { title: 'London Calling', banner: FeaturedTripBanner2, totalActivities: 198, rating: 4.2 },
    { title: 'Aussie Escape', banner: FeaturedTripBanner3, totalActivities: 121, rating: 4.5 },
    { title: 'Italy Vibes', banner: FeaturedTripBanner4, totalActivities: 176, rating: 4.7 },
    { title: 'Mexico Magic', banner: FeaturedTripBanner5, totalActivities: 163, rating: 4.1 },
    { title: 'Japan Trails', banner: FeaturedTripBanner6, totalActivities: 189, rating: 4.8 },
];

export const handpickedTripsDefaultData = [
    { title: 'Thornridge Cir. Shiloh', location: `St George's Ln Singapore`, price: 300, tags: ['Mountains', 'City'], banner: HandpickedTripBanner1 },
    { title: 'Roraima Tepui', location: 'Canaima Park, Venezuela', price: 790, tags: ['Solo travel', 'Budget'], banner: HandpickedTripBanner2 },
    { title: 'Socotra Island', location: 'Yemen', price: 870, tags: ['Luxury', 'Beach'], banner: HandpickedTripBanner3 },
    { title: 'San Lake Baikal', location: 'Siberia, Russia', price: 604, tags: ['Sports', 'Adventurous'], banner: HandpickedTripBanner4 },
    { title: `Anse Source d'Argent`, location: 'La Digue, Seychelles', price: 495, tags: ['Beach', 'Luxury'], banner: HandpickedTripBanner5 },
    { title: `Anse Source d'Argent`, location: 'Aysén Region', price: 682, tags: ['Sports', 'Budget'], banner: HandpickedTripBanner6 },
    { title: `Taman Negara`, location: 'Peninsular Malaysia', price: 386, tags: ['Mountains', 'Adventurous'], banner: HandpickedTripBanner7 },
    { title: `Zhangye Landform`, location: 'Gansu, China', price: 582, tags: ['Solo travel', 'City'], banner: HandpickedTripBanner8 },
];