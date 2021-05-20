import { Component, OnInit } from '@angular/core';
import { UserInput } from './model/user-input';
import { VendingMachineService } from './vending-machine.service';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.sass']
})
export class VendingMachineComponent implements OnInit {

  public error$ = this.store.error$;
  public info$ = this.store.info$;
  public supply$ = this.store.supply$;

  constructor(private store: VendingMachineService) { }

  ngOnInit(): void {
  }

  public resupply(value: number): void {
    this.store.updateSupply(value);
  }

  public purchase(value: UserInput): void {
    this.store.purchase(value);
  }

}
