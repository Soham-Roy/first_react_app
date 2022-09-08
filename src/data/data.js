const apiKey = `177e2c722c408535f5d2f003f47dd56c`;

async function getData() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&adult=true`);
    const json = await response.json();
    return json;
}

getData().then(data => console.log(data));

export default [
    {
        adult: false,
        backdrop_path: "/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg",
        genre_ids: [
            28,
            18,
            878
        ],
        id: 629176,
        original_language: "en",
        original_title: "Avengers Endgame",
        overview: "Thirteen year old Sam Cleary suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.",
        popularity: 5115.365,
        poster_path: "/avengers_endgame.jpeg",
        release_date: "2022-08-25",
        title: "Samaritan",
        video: false,
        vote_average: 7,
        vote_count: 813
    },
    {
        adult: false,
        backdrop_path: "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
        genre_ids: [
            28,
            12,
            14
        ],
        id: 616037,
        original_language: "en",
        original_title: "Thor: Love and Thunder",
        overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        popularity: 4237.659,
        poster_path: "/thor_love_and_thunder.jpg",
        release_date: "2022-07-06",
        title: "Thor: Love and Thunder",
        video: false,
        vote_average: 6.8,
        vote_count: 2326
    },
    {
        adult: true,
        backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        genre_ids: [
            18,
            80
        ],
        id: 238,
        original_language: "en",
        original_title: "The Godfather",
        overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        popularity: 106.178,
        poster_path: "/the_godfather.jpg",
        release_date: "1972-03-14",
        title: "The Godfather",
        video: false,
        vote_average: 8.7,
        vote_count: 16528
    }
];