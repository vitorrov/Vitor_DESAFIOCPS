'use strict';

const User = use('App/Models/User');

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.all();

    const user = await User.findBy('email', email);

    const token = await auth.attempt(email, password);

    return response.json({
      user: {
        id: user.id,
        name: user.username,
        email: user.email,
        token,
      },
    });
  }
}

module.exports = SessionController;
