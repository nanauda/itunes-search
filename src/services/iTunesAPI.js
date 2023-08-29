export const itunesSearch = async (search) => await fetch(`https://itunes.apple.com/search?term=${search}&entity=album`).then(val => val.json());
//# sourceMappingURL=iTunesAPI.js.map