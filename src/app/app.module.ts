import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DataModule }   from './data/data.module';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
   
@NgModule({
    imports:      [ BrowserModule, DataModule],
    declarations: [ AppComponent, ProductAlertsComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }