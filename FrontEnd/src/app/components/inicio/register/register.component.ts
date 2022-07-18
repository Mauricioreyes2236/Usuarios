import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registro: FormGroup;
  validPattern = "([A-Za-z0-9]{1,})";
  /* pswdPattern = "^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d._$%#*]{10,}$"; */
  
  constructor(private fb: FormBuilder) { 
    this.registro = this.fb.group({
      usuario:['', [Validators.required,Validators.pattern(this.validPattern)]],
      password:['',Validators.required,],
      confirmPassword: ['',Validators.required,]
    }/* , {validator: this.checkPassword } */);
  }

  ngOnInit(): void {
  }
  registrarUsuario(): void{
    console.log(this.registro);
  }

  /* checkPassword(group: FormGroup): any{
    const password = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    return password === confirmPass ? null : {notSame: true};
  } */

}
