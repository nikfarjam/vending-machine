import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { UserInput } from './model/user-input';
import { DEFAULT_COST, DEFAULT_SUPPLY, VMState } from './model/vending-machine-state';

@Injectable({
  providedIn: 'root'
})
export class VendingMachineService extends ComponentStore<VMState> {

  public readonly supply$: Observable<number> = this.select(state => state.supply);
  public readonly returnCash$: Observable<number> = this.select(state => state.returnCash);
  public readonly returnCans$: Observable<number> = this.select(state => state.returnCans);
  public readonly info$: Observable<string> = this.select(state => state.infoMessage);
  public readonly error$: Observable<string> = this.select(state => state.errorMessage);

  constructor() { 
    super({
      supply: DEFAULT_SUPPLY,
      returnCash: 0,
      returnCans: 0,
      errorMessage: '',
      infoMessage: ''
    })
  }

  readonly updateSupply = this.updater((state: VMState, supply: number) => {
    return {
      ...state,
      supply
    }
  });

  readonly purchase = this.updater((state: VMState, userInput: UserInput) => {

    let { supply } = state;
    let returnCash = 0;
    let returnCans = 0;
    let errorMessage = '';
    let infoMessage = '';
    const totalCost = DEFAULT_COST * userInput.cans;

    if (userInput.cans > supply) {
      errorMessage = 'Out of stock'
    } else if (userInput.cash >= totalCost) {
      supply = supply - userInput.cans;
      returnCash = userInput.cash - totalCost;
      returnCans = userInput.cans;
      infoMessage = `Return ${returnCans} with ${returnCash.toFixed(2)} cash`;
    } else {
      returnCash = userInput.cash;
      errorMessage = 'Insufficient money';
    }

    return {
      ...state,
      supply,
      returnCans,
      returnCash,
      errorMessage,
      infoMessage
    }
  });
}
