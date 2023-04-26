// Objects are something that has properties and functionality
// Properties define what the thing is
// Functionality defines what the thing does

// Wheels = round, width, spokes, material
let isRound = true;
let width = 10;
let numberOfSpokes = 5;
let material = "Rubber";

let wheelProperties = [
    isRound,
    width,
    numberOfSpokes,
    material
];
console.log(wheelProperties);

let wheel1 = {
    // property name (key): property value
    isRound: true,
    width: 10,
    numberOfSpokes: 5,
    material: "Rubber"
};
console.log(wheel1);

let wheel2 = {
    isRound: true,
    width: 12,
    numberOfSpokes: 4,
    material: "Rubber"
}
console.log(wheel2);

// Dot Notation - use to access properties and methods
console.log(wheel1.material);
console.log(wheel1.pressure);   // Read

wheel1.pressure = "Absolutely"; // Writing
console.log(wheel1.pressure);

console.log(wheel2["numberOfSpokes"]);

let show = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot" },
                { episode: 2, episodeName: "Flying" },
                { episode: 3, episodeName: "Tahani Al-Jamil" },
                { episode: 4, episodeName: "Jason Mendoza" },
                { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis" }
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great!" },
                { episode: 2, episodeName: "Dance Dance Resolution" },
                { episode: 3, episodeName: "Team Cockroach" },
                { episode: 4, episodeName: "Existential Crisis" },
                { episode: 5, episodeName: "The Trolley Problem" },
                { episode: 6, episodeName: "Janet and Michael" }
            ]
        },
        season3: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Everything Is Bonzer!" },
                { episode: 2, episodeName: "The Brainy Bunch" },
                { episode: 3, episodeName: "The Snowplow" },
                { episode: 4, episodeName: "Jeremy Bearimy" },
                { episode: 5, episodeName: "The Ballad of Donkey Doug" }
            ]
        }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
};

let season2Episode2Name = show.seasonInfo.season2.episodeInfo[1].episodeName;
console.log(season2Episode2Name);