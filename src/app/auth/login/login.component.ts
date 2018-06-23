import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.ts',
    styleUrls: [ './login.component.css' ]
})

export class LoginComponent { 

    loginForm: FormGroup;
    loginError: boolean;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ){ }    

    ngOnInit(){
        this.createLoginForm();
    }

    protected createLoginForm(){
        this.loginForm = this.fb.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        })
    }

    loginUser(loginInfo: FormGroup){
        console.log(this.loginForm.value);
        this.authService.login(loginInfo.value).subscribe(res =>{
            console.log(res);
        })
    }
}