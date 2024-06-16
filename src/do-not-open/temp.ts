export const makers = [
    'Audi',
    'BMW',
    'Mercedes-Benz',
    'Porsche',
    'Volkswagen',
    'Volvo',
    'Toyota',
    'Renault',
    'Nissan',
]

export const fuelTypes = [
    'Gasoline',
    'Diesel',
    'Electric',
    'Hybrid Diesel',
    'Hybrid Gasoline',
    'PHEV',
    'MHEV',
    'LPG',
    'Hydrogen',
]

export type Car = {
    make: string;
    model: string;
    year: number;
    fuel: string;
    price: number;
    power: number;
    torque: number;
    gearbox: string;
    color: string;
    upholstery: string;
    traction: string;
    grade: string;
    state: string;
    id: number;
    bodytype: string;
    short_description?: string;
    long_description?: string;
    image_link: string;
}

export const carTemplate = {
    make: 'BMW',
    model: '3 Series',
    year: 2024,
    fuel: 'Gasoline',
    price: 32850,
    power: 200,
    torque: 350,
    gearbox: 'Automatic',
    color: 'Black',
    upholstery: 'Leather',
    traction: 'AWD',
    grade: '9',
    state: 'New',
    id: 8,
    bodytype: 'Sedan',
    short_describtion: 'Sporty, luxurious sedan with powerful performance and elegant, innovative design.',
    image_link: './src/assets/images/bmw-3.png',
}

export const deals = [
    {
        name: 'BMW 3 Series',
        imageLink: './src/assets/images/bmw-3.png',
    },
    {
        name: 'Toyota Land Cruiser Prado',
        imageLink: './src/assets/images/toyota-prado.png',
    },
    {
        name: 'Mazda 3',
        imageLink: './src/assets/images/mazda-3.png',
    }
]

export const faqs = [
    {
        question: "Can I compare new and used cars?",
        answer: "Yes, you can compare both new and used cars on our website."
    },
    {
        question: "Is there a cost to use this website?",
        answer: "No, there is no cost to use this website."
    },
    {
        question: "Why should I use a car comparison website?",
        answer: "Using a car comparison website helps you make informed decisions by providing detailed comparisons of different models and prices."
    },
    {
        question: "Can I find dealer contact information on your website?",
        answer: "Yes, you can find dealer contact information on our website."
    }
]