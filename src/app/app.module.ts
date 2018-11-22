import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FilterPipePipe } from './card/filter-pipe.pipe';
import { TransformNumberPipe } from './card/transform-number.pipe';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { MenuComponent } from './card/menu/menu.component';
import { TransformStringPipe } from './card/menu/transform-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterPipePipe,
    TransformNumberPipe,
    WeatherComponent,
    SocialComponent,
    MenuComponent,
    TransformStringPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
