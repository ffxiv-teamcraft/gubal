const request = require('request-promise');

module.exports = async function userIdValidator(userId) {
  const result = await request(`https://us-central1-ffxivteamcraft.cloudfunctions.net/userIdValidator?userId=${userId}`);
  return JSON.parse(result).value;
};
