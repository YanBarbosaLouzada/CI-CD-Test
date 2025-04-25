import { generateAtualDate } from "../helpers/generateAtualDate";

export const mockNotes = [
    {
        id: "1",
        description: "Assistir o jogo do corinthians.",
        title: "Paulistão 2025",
        date: generateAtualDate(),
    },
    {
        id: "2",
        description: "Assitir filme do Star Wars.",
        title: "Filmes",
        date: generateAtualDate(),
    },
    {
        id: "3",
        description: "Assistir a nova temporada de The Last Of Us.",
        title: "Series",
        date: generateAtualDate(),
    },
];