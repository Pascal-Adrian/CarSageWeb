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
    drive: string;
    grade: string;
    state: string;
    bodyType: string;
    describtionShort: string;
    describtion: string;
    imageLink: string;
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
    drive: 'AWD',
    grade: '9',
    state: 'New',
    bodyType: 'Sedan',
    describtionShort: 'Sporty, luxurious sedan with powerful performance and elegant, innovative design.',
    describtion: "The BMW 3 Series epitomizes sporty luxury with its powerful performance and elegant design. Known for its agile handling and sleek, dynamic appearance, it offers a comfortable and refined driving experience. Innovative technology enhances the sedan's appeal, making it a top choice for those seeking both sophistication and exhilarating driving capabilities.",
    imageLink: './src/assets/images/bmw-3.png',
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