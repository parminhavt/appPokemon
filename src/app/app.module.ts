import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule, PoI18nConfig, PoI18nModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { BreadcrumbControlService } from 'dts-backoffice-util';
import { generalPt } from './shared/literals/i18n/general-pt';
import { generalEn } from './shared/literals/i18n/general-en';
import { generalEs } from './shared/literals/i18n/general-es';
import { pokemonMntPt } from './shared/literals/i18n/pokemon-mnt-pt';
import { pokemonMntEn } from './shared/literals/i18n/pokemon-mnt-en';
import { pokemonMntEs } from './shared/literals/i18n/pokemon-mnt-es';
import { AboutComponent } from './about/about.component';

const i18nConfig: PoI18nConfig = {
  default: {
      language: localStorage.getItem('user.language') || navigator.language,
      context: 'general',
      cache: true
  },
  contexts: {
      general: {
          'pt-BR': generalPt,
          'pt': generalPt,
          'en-US': generalEn,
          'en': generalEn,
          'es': generalEs
      },
      pokemonMnt: {
          'pt-BR': pokemonMntPt,
          'pt': pokemonMntPt,
          'en-US': pokemonMntEn,
          'en': pokemonMntEn,
          'es': pokemonMntEs
      }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    PoI18nModule.config(i18nConfig)
  ],
  providers: [
    BreadcrumbControlService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
