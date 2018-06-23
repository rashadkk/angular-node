import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }