import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { Router } from '@angular/router';
import { FireService } from '../services/fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userData : User = new User();

  constructor(private router:Router, 
              private fireService:FireService) 
  { }

  ngOnInit() {
  }

  async login()
  {
    const res = await this.fireService.logininWithEmail(this.userData);
    if(res)
    this.router.navigateByUrl('/home');
    else
    this.fireService.presentAlert('Hatalı kullanıcı adı ya da şifre');
  }

}
