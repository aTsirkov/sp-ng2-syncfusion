import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EJAngular2Module, GridComponent } from 'ej-angular2';

import { SpService } from './sharepoint/sharepoint.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './forms/home/home.component';
import { CatalogComponent } from './forms/catalog/catalog.component';
import { RTKListComponent } from './forms/rtk-list/rtk-list.component';
import { RTKComponent } from './forms/rtk/rtk.component';
import { RtkObjectsComponent } from './forms/rtk-objects/rtk-objects.component';

import { EJ_Grid_DetailTemplate } from './forms/ej.grid.detail-template';

import { rootRouterConfig } from './app.routes';

enableProdMode();

class CustomErrorHandler implements ErrorHandler {
  call(error, stackTrace = null, reason = null) {
    console.log(error + "\n" + stackTrace);
  }
  handleError(error: any): void {
    console.log(error);
  }
}

@NgModule({
  imports: [
      BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig, { useHash: true }), EJAngular2Module.forRoot()
  ],
  declarations: [
      AppComponent, HomeComponent, CatalogComponent, RTKListComponent, RTKComponent, RtkObjectsComponent, EJ_Grid_DetailTemplate
  ],
  providers: [SpService, GridComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
