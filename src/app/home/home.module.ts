import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";
import { homeRoutes } from "./home.route";



@NgModule({
 declarations: [
  HomeComponent,
 ],
 imports: [
  RouterModule.forChild(homeRoutes),
  SharedModule
 ],
 providers: [

 ],
})

export class HomeModule {}