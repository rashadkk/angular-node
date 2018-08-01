import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { authRoutes } from "./auth.route"
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(authRoutes),
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }