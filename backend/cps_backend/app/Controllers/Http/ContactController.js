const Contact = use('App/Models/Contact');

class ContactController {
  async index() {
    const requests = await Contact.all();

    return requests;
  }

  async store({ request, response }) {
    const data = request.all();

    const contact = await Contact.create(data);

    return contact;
  }
}

module.exports = ContactController;
