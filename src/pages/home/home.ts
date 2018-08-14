import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactsProvProvider } from '../../providers/contacts-prov/contacts-prov';
import { Contact } from '../../../node_modules/@ionic-native/contacts';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = "";
  cts = Array<Contact>();
  constructor(
    public navCtrl: NavController,
    private contactsProv : ContactsProvProvider,
    private alertCtrl: AlertController) {

      //Primera llamada de todos los contactos
      this.getAllContacts(name);
  }

  getAllContacts(ev: any){
    this.contactsProv.getContacts()
    .then(x =>{
      this.cts = x;
    })
    .catch(error => {
      console.log(error);
    });

  }
  getOneContact(ev: any){
    console.log(this.name);
    this.contactsProv.getSearchContacts(this.name)
    .then(x =>{
      this.cts = x;
      console.log(this.cts);
    })
    .catch(error => {
      console.log(error);
    });

  }

  presentConfirm(info:string, phone) {
    let alert = this.alertCtrl.create({
      title: 'Contact Information',
      message: info+":<br/> "+phone,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Ok clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
