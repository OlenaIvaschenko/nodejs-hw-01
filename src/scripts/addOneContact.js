import { faker } from "@faker-js/faker";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const fakeContact = faker.helpers.multiple(createFakeContact, {
    count: 1,
  });
  // console.log(contacts);

  const dbContacts = await readContacts();

//   console.log(dbContacts);

  const allContacts = [...dbContacts, ...fakeContact];

//   console.log(allContacts);

  writeContacts(allContacts);
};

addOneContact();
