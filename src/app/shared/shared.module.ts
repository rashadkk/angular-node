import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navdar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    NgbModule.forRoot(),
  ],
  providers: [

  ],
  exports: [
    NavbarComponent,
  ]
})

export class SharedModule { }