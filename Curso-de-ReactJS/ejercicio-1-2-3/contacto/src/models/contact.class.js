export class Contact {
  name = "";
  surname = "";
  email = "";
  conected = false;

  constructor(name, surname, email, conected) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.conected = conected;
  }
}
