const Route = use('Route');

Route.get('/listcontacts', 'ContactController.index');
Route.post('/contactus', 'ContactController.store');
