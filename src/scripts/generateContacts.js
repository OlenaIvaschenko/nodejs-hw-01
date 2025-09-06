import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { faker } from '@faker-js/faker';

const generateContacts = async (number) => {
  const fakeContacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });
  // console.log(contacts);

  const dbContacts = await readContacts();

  // console.log(dbContacts);

  const allContacts = [...dbContacts, ...fakeContacts];

  // console.log(allContacts);

  writeContacts(allContacts);
};

generateContacts(5);
