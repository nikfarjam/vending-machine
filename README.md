# VendingMachine

This is a sample project of [ComponentStore](https://ngrx.io/guide/component-store)

`VendingMachineComponent` is a container component which works with store and other services and manages data flow.

`VmUserInterfaceComponent` is a presentation component which does not work directly with services, it only presents state to end user, it has basic UI logic but no business logic

`VendingMachineService` is updater and selector of store


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
