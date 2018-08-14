import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactFindOptions, ContactField, ContactFieldType } from '@ionic-native/contacts';

/*
  Generated class for the ContactsProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvProvider {

  constructor(
    private contacts : Contacts
  ) {
    console.log('Hello ContactsProvProvider Provider');
  }

  public getContacts() : Promise<Contact[]>{
    console.log('Hello ContactsProvProvider Provider');
    var options                         = new ContactFindOptions();
    options.filter                      = "*";
    options.multiple                    = true;
    var fieldTypes : ContactFieldType[] = ['displayName', 'phoneNumbers'];
    return this.contacts.find(fieldTypes, options);
  }

  public getSearchContacts(name) : Promise<Contact[]>{
    console.log('Hello ContactsProvProvider search');
    var options : ContactFindOptions    = new ContactFindOptions();
    options.filter                      = name;
    options.multiple                    = true;
    var fieldTypes : ContactFieldType[] = ['displayName','phoneNumbers'];
    return this.contacts.find(fieldTypes, options);
  }

}
