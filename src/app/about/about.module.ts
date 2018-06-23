import { NgModule, } from "@angular/core";
import { AboutComponent } from "./about.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { aboutRoutes } from "./about.route";

@NgModule({
 declarations: [
    AboutComponent,
 ],
 imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
 ],
 providers: [

 ]
})
export class AboutModule{}