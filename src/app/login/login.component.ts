import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@app/login.service';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  username: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  login: any = { role : 'admin'};
  constructor(private router: Router){}
  submitForm() {
    if(this.login.role==='admin'){
      this.router.navigate(['/admin']);
    }
    else if(this.login.role==='student'){
      this.router.navigate(['/student']);
    }
    
  }}