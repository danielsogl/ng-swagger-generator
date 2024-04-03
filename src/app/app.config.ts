import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { Configuration, ConfigurationParameters, PetStoreApiModule } from 'api';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.basePath,
  };
  return new Configuration(params);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(PetStoreApiModule.forRoot(apiConfigFactory)),
  ],
};
