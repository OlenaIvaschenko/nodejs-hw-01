import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const allContactsArray = await readContacts();
  if (allContactsArray.length > 0) {
    const newArr = allContactsArray.slice(0, -1);
    await writeContacts(newArr);
  }
};

removeLastContact();
