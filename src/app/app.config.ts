import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BACKEND_API } from './utils/backend_api';
import { authInterceptor } from './shared/interceptors/auth.interceptor';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './shared/interceptors/error.interceptor';
import { cacheInterceptor } from './shared/interceptors/cache.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideToastr(),
    { provide: BACKEND_API, useValue: 'https://dummyjson.com' },
    provideHttpClient(
      withInterceptors([errorInterceptor, authInterceptor, cacheInterceptor])
    ),
    provideRouter(routes),
  ],
};
