import { SelectFlightService } from './select-flight.service';
import { NgModule } from "@angular/core";
import { SelectFlightContainer } from "./select-flight-container";

@NgModule({
  imports: [],
  declarations: [
    SelectFlightContainer
  ],
  providers: [
    SelectFlightService
  ]
})
export class SelectFlightModule {}
