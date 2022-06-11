import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncreptionDecreptionService {
  constructor() { }
  encrypt(data: string) {

    //alert(data);

    var key = CryptoJS.enc.Utf8.parse('WINPAY@#10@ICICI');
    var iv = CryptoJS.enc.Utf8.parse('JAIBALAJIVIBHORI');
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
      {
        keySize: 16,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7


      });
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      keySize: 16,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return encrypted;

  }


  dcrypt(data: string) {

    //alert(data);

    var key = CryptoJS.enc.Utf8.parse('WINPAY@#10@ICICI');
    var iv = CryptoJS.enc.Utf8.parse('JAIBALAJIVIBHORI');

    var decrypted = CryptoJS.AES.decrypt(data, key, {
      keySize: 16,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);

  }

}
