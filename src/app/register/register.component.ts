import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData :any ={
    username:'',
    email:'',
    phone:'',
    password:'',
    cpass:''

  }
  constructor(
    private authService:AuthService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  register(f:any){
    if(f.valid){
      const data = this.registerData;
      this.authService.register(data).subscribe((res:any)=>{
        if(res.success){
          this.authService.setToken(res.token)
          this.route.navigate(['/users'])
        }
      })
    }

  }

}
