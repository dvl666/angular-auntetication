import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,

  ) {}
 
  username: string = ''
  password: string = ''

  OnClick() {
    console.log(this.username, this.password)
    console.log('hola')
    this.authService.userAutentication(this.username, this.password).subscribe(response => {
      console.log('usuario valido',response)
      this.toastr.success('Se a iniciado sesion con exito.')
      const data: NavigationExtras = {
        state: {
          username: this.username
        }
      }
      this.router.navigate(['/home'], data)
    }, error => {
      console.error('usuario invalido',error);
      this.toastr.error('Credenciales invalidas.')
    })
  }

}
