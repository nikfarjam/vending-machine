import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VendingMachineModule } from './vending-machine/vending-machine.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VendingMachineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
