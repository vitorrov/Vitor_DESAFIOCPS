/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ContactSchema extends Schema {
  up() {
    this.create('contacts', table => {
      table.increments();
      table.string('name', 80).notNullable();
      table.string('email').notNullable();
      table.string('text').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('contacts');
  }
}

module.exports = ContactSchema;
