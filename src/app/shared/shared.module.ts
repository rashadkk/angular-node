import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navdar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    NgbModule,
    RouterModule,
    CommonModule
  ],
  providers: [

  ],
  exports: [
    NavbarComponent,
  ]
})

export class SharedModule { }