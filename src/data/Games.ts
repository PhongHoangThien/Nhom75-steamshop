export interface Game {
    id: number;
    name: string;
    price: number;
    image: string;
    platform: string;
}

export const games: Game[] = [
    {
        id: 1,
        name: "Cyberpunk 2077",
        price: 890000,
        image: "images/cyberpunk.png",
        platform: "PC",
    },
    {
        id: 2,
        name: "Elden Ring",
        price: 990000,
        image: "images/eldenring.png",
        platform: "PC",
    },
    {
        id: 3,
        name: "God of War",
        price: 790000,
        image: "images/godofwar.png",
        platform: "PC",
    },
];
