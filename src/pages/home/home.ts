import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public login = {
    email: "",
    senha: ""
  }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.login = {
      email: "",
      senha: ""
    }
  }
    loginForm() {
    console.log(this.login.email);
    console.log(this.login.senha);
    
    const alert = this.alertCtrl.create({
      title: 'Aviso!',
      subTitle: 'Usuário: ' + this.login.email + '<br> Senha: ' + this.login.senha,
      buttons: ['Ok']
    });
    alert.present();
  }

}
