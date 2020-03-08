const Contact = use('App/Models/Contact');

class ContactController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async store({ request, response }) {
    const data = request.all();

    const contact = await Contact.create(data);

    return contact;
  }
}

module.exports = ContactController;
