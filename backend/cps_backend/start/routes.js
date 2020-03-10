const Route = use('Route');

Route.post('/contactus', 'ContactController.store');

Route.post('/adminregister', 'UserController.store');

Route.post('/adminlogin', 'SessionController.store');

Route.get('/listcontacts', 'ContactController.index').middleware(['auth']);

