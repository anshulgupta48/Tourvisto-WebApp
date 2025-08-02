// <======== Exporting Interfaces for TripCard-Component ========>
export interface TripCardComponentProps {
    tripId: number,
    title: string,
    location: string,
    price: number,
    tags: string[],
    banner: string,
};


// <======== Exporting Interfaces for TripDetails-Page ========>
export interface TripDetailsDataType {
    title: string,
    days: number,
    location: string,
    tags: string[],
    rating: number,
    price: number,
    heading: string,
    subHeading: string,
    description: string,
    subDescription: string,
    activities: { title: string, description: string[] }[],
    bestTimeToVisit: string[],
    weatherInfo: string[],
};

export interface MapDataType {
    country: string,
    color: string,
    coordinates: string[]
};