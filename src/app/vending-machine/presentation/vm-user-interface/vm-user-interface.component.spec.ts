import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmUserInterfaceComponent } from './vm-user-interface.component';

describe('VmUserInterfaceComponent', () => {
  let component: VmUserInterfaceComponent;
  let fixture: ComponentFixture<VmUserInterfaceComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
