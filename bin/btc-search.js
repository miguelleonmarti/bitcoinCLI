const SearchCommand = require("../commands/search");

(async () => {
    await (new SearchCommand()).select();
})()