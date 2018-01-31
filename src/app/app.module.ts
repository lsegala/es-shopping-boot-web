import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import { ItensComponent } from './itens/itens.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLatComponent } from './menu-lat/menu-lat.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import {ShoppingService} from "./services/shopping.service";
import {
  AccordionModule, AutoCompleteModule,
  BreadcrumbModule, ButtonModule, DataGridModule, GalleriaModule, InputTextModule, MenuModule,
  PanelModule
} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetalheComponent } from './detalhe/detalhe.component';
import {AppRoutes} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    ItensComponent,
    MenuComponent,
    MenuLatComponent,
    ThumbnailComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DataGridModule,
    PanelModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    BreadcrumbModule,
    GalleriaModule,
    AccordionModule,
    AutoCompleteModule,
    AppRoutes
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
