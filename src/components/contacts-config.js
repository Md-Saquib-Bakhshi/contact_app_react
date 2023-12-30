import { faker } from "@faker-js/faker";

const fakeContacts = new Array(5).fill({}).map((el) => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.fakeContacts,
    address: faker.lorem.paragraph(),
    image: faker.internet.avatar(),
  };
});

const formInputs = [
  {
    label: "First_Name",
    name: "firstName",
    type: "text",
    tag: "input",
  },
  {
    label: "Last_Name",
    name: "lastName",
    type: "text",
    tag: "input",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    tag: "input",
  },
  {
    label: "Phone_Number",
    name: "phone",
    type: "text",
    tag: "input",
  },
  {
    label: "Address",
    name: "address",
    type: "textarea",
    tag: "textarea",
  },
];

export { formInputs, fakeContacts };