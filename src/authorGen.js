import Env from './env.js';

import axios from 'axios';

const userCache = {};

const getUser = async (id) => userCache[id] || (userCache[id] = (await axios.get(`https://discord.com/api/v9/users/${id}`, {
  headers: {
    'Authorization': `Bot ${Env.discord}`
  }
})).data);

export default async (id) => {
  const user = await getUser(id);

  console.log(user);

  return { // Use semi-minified keys as to avoid size
    i: id, // id

    n: `${user.username}#${user.discriminator}`, // name

    a: user.avatar // avatar
  }
};