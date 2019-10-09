'use strict';

const request = require('request-promise');

/**
 * `isProvidingValidUserId` policy.
 */

module.exports = async (ctx, next) => {
  const result = await request(`https://us-central1-ffxivteamcraft.cloudfunctions.net/userIdValidator?userId=${ctx.request.body.userId}`);
  if (JSON.parse(result).valid) {
    await next();
  } else {
    ctx.response.badRequest('Invalid userId');
  }
};
