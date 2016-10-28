import { provideRoutes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

const APP_ROUTES = [
	{ path: 'user', component: UserComponent },
	{ path: '', component: AppComponent}
];

export const APP_ROUTES_PROVIDER = [
	provideRoutes(APP_ROUTES)
];