import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInput } from '../../model/user-input';

@Component({
  selector: 'vm-user-interface',
  templateUrl: './vm-user-interface.component.html',
  styleUrls: ['./vm-user-interface.component.sass']
})
export class VmUserInterfaceComponent implements OnInit {

  @Input() public supply = 0;
  @Output() resupplyEvent = new EventEmitter<number>();
  @Output() purchaseEvent = new EventEmitter<UserInput>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Basic UI validation and logic are done in the presentation component
   * @param newSupply 
   */
  public resupply(newSupply: string): void {
    const value = +newSupply;
    if (!isNaN(value)) {
      this.resupplyEvent.emit(value);
    }
  }

  public purchase(cash: string, cans: string): void {
    const cashValue = +cash;
    const cansValue = +cans;
    if (!isNaN(cansValue) && !isNaN(cashValue)) {
      this.purchaseEvent.emit({cash: cashValue, cans: cansValue});
    }
  }

}
