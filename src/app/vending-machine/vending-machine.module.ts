import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendingMachineComponent } from './vending-machine.component';
import { VmUserInterfaceComponent } from './presentation/vm-user-interface/vm-user-interface.component';



@NgModule({
  declarations: [
    VmUserInterfaceComponent,
    VendingMachineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VmUserInterfaceComponent,
    VendingMachineComponent
  ]
})
export class VendingMachineModule { }
