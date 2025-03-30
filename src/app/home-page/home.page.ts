import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource,
} from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { Platform } from '@ionic/angular';

import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent],
})
export class HomePage {
  #platform = inject(Platform);

  loren = Promise.resolve('loren');

  contactsResource = resource({
    loader: () =>
      Contacts.getContacts({
        projection: {
          name: true,
          phones: true,
          postalAddresses: true,
        },
      }),
  });

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.contactsResource.value());
    }, 5000);
  }
}
