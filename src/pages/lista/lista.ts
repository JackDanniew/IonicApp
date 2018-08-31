import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  public pessoas: Array<string>;
  private url: string = "http://localhost/WebService/index.php";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http) {

    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.pessoas = data.listaPessoas;
    }); 

  }

  itemSelected(item){

    const dados = {
      id: item.id,
      nome: item.nome,
      dataNasc: item.data_nascimento,
    }

    const alert = this.alertCtrl.create({
      title: 'Pessoa' ,
      subTitle: `
        <strong>Id:</strong> ${dados.id}<br>
        <strong>Nome:</strong> ${dados.nome}<br>
        <strong>Data de Nascimento:</strong> ${dados.dataNasc}<br>
      `,

      buttons: ['OK']
    });
    alert.present();

  }

}
