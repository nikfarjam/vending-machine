import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VmUserInterfaceComponent } from './vm-user-interface.component';

describe('VmUserInterfaceComponent', () => {
  let component: VmUserInterfaceComponent;
  let fixture: ComponentFixture<VmUserInterfaceComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmUserInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmUserInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show supply value', () => {
    const supply = 11;
    component.supply = supply;

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.vm-user-interface--supply').textContent).toContain(supply);
  });

  it('should pass resupply value to parent', () => {
    const resupply = 11;
    spyOn(component.resupplyEvent, 'emit');

    const compiled = fixture.nativeElement;
    compiled.querySelector(`.vm-user-interface--resupply [name='new-supply']`).value = resupply;
    compiled.querySelector(`.vm-user-interface--resupply [name='new-supply-btn']`).click();

    expect(component.resupplyEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.resupplyEvent.emit).toHaveBeenCalledWith(resupply);
  });

  it('should pass purchase value to parent', () => {
    const cans = 5;
    const cash = 3;
    spyOn(component.purchaseEvent, 'emit');

    component.purchase(`${cash}`, `${cans}`);

    expect(component.purchaseEvent.emit).toHaveBeenCalledTimes(1);
    expect(component.purchaseEvent.emit).toHaveBeenCalledWith({cash, cans});
  });

});
