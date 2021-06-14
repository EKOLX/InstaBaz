import Card from "../models/Card";

export const getInitials = (fullName: string): string => {
    const names = fullName.split(' ');
    return names[0].substring(0, 1) + names[1].substring(0, 1);
}

export const getColorByUserName = (userName: string): string => {
    switch (getInitials(userName)[0]) {
        case 'A':
            return 'coral';
        case 'B':
            return 'firebrick';
        case 'C':
            return 'fuchsia';
        case 'D':
            return 'indigo';
        case 'F':
            return 'olive';
        default: return 'teal';
    }
}

export const getImageFromId = (id: number): string => {
    return `https://unsplash.it/id/${id}/600/600`;
    //return 'https://source.unsplash.com/600x600';
}

export const fetchCards = (): Promise<Array<Card>> => {
    const promise = new Promise<Array<Card>>((resolve, reject) => {
        const cards: Array<Card> = [
            { id: 1, author: "Aovich Tularus", imageUri: getImageFromId(getRamdomId(1, 25)), comments: ['I like it!'] },
            { id: 2, author: "Brayn Jacada", imageUri: getImageFromId(getRamdomId(25, 50)), comments: [] },
            { id: 3, author: "Clara Moss", imageUri: getImageFromId(getRamdomId(50, 75)), comments: [] },
            { id: 4, author: "Dzehn Ken", imageUri: getImageFromId(getRamdomId(75, 100)), comments: [] },
        ];
        resolve(cards);
    });

    return promise;
}

const getRamdomId = (min: number = 1, max: number = 100): number => Math.floor(Math.random() * (max - min) + min);