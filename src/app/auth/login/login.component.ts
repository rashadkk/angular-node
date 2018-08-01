import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ToastsManager } from "ng2-toastr";

@Component({
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})

export class LoginComponent { 

    loginForm: FormGroup;
    loginError: boolean;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        public toastr: ToastsManager,
        private vcr: ViewContainerRef,
    ){
        this.toastr.setRootViewContainerRef(vcr);}    

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
            // if(res.status){

            // }
            this.toastr.success('Login Success')
        }, err=>{
            if(err.status == 401){
                this.toastr.error("Invalid username or password");
            }else if (err.status == 500){
                this.toastr.error("DB Error");
            }
        })
    }
}