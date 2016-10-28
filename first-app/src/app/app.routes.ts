import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';

const APP_ROUTES: Routes = [
	{ path: 'user', component: UserComponent },
	{ path: 'client', component: ClientComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);