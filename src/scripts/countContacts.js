import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  const countArray = await getAllContacts();

  return countArray.length;
};

console.log(await countContacts());
