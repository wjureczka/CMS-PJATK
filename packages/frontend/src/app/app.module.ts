import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBar} from '@angular/material/snack-bar';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarModule} from './shared/navbar/navbar.module';
import {CredentialsFormModule} from './shared/forms/credentials-form/credentials-form.module';
import {SessionModule} from './session/session.module';
import {CreatorModule} from './creator/creator.module';
import {CMSInterceptor} from './core/cms.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    CredentialsFormModule,
    SessionModule,
    CreatorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpBackend]
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    MatSnackBar,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: CMSInterceptor,
    }
],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function TranslationLoaderFactory(http: HttpBackend): TranslateHttpLoader {
  const handler = new HttpClient(http);

  return new TranslateHttpLoader(handler);
}
