const axios = require("axios").default;

const mine = {
  get: async () => {
    const response = await axios.get("https://bitcoin00.herokuapp.com/mine");
    return console.log(response.data);
  }
};

module.exports = mine;