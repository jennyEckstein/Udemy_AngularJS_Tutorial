import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
	{ path: 'user', component: UserComponent },
	{ path: 'client', component: ClientComponent}, 
	{ path: '', component: AppComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES); 