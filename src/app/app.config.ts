import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  phosphorSunBold,
  phosphorCloudBold,
  phosphorCloudRainBold,
  phosphorCloudLightningBold,
  phosphorCloudFogBold,
  phosphorSnowflakeBold,
  phosphorWindBold,
  phosphorSquaresFourBold,
  phosphorArrowClockwiseBold,
  phosphorCloudSunBold,
  phosphorArrowUpRightBold,
} from '@ng-icons/phosphor-icons/bold';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideIcons({
      phosphorSunBold,
      phosphorCloudBold,
      phosphorCloudRainBold,
      phosphorCloudLightningBold,
      phosphorCloudFogBold,
      phosphorSnowflakeBold,
      phosphorWindBold,
      phosphorSquaresFourBold,
      phosphorArrowClockwiseBold,
      phosphorCloudSunBold,
      phosphorArrowUpRightBold,
    }),
  ],
};
