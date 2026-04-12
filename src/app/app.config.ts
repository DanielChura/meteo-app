import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  lucideSun,
  lucideCloud,
  lucideCloudRain,
  lucideCloudLightning,
  lucideCloudFog,
  lucideSnowflake,
  lucideWind,
} from '@ng-icons/lucide';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideIcons({ lucideSun, lucideCloud, lucideCloudRain, lucideCloudLightning, lucideCloudFog, lucideSnowflake, lucideWind }),
  ],
};
