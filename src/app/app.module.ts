import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DirectivesModule } from './directives/directives.module';

import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CardComponent } from './components/card/card.component';
import { SearchPageComponent } from './pages/search-page/search-page/search-page.component';
import { GridComponent } from './components/grid/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    CardComponent,
    SearchPageComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
