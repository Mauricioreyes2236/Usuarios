import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.login = fb.group({
      usuario:[ '', Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  log(): void{
    console.log(this.login)

    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password
    }
    console.log(usuario);
  }

}
