import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { profileRoutes } from "./profile.route";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(profileRoutes),
    ],
    providers: [

    ]
})

export class ProfileModule {}