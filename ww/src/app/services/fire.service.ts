import { Injectable } from '@angular/core';
import { Firestore, doc, collection, addDoc, deleteDoc, docData, collectionData, query, orderBy, updateDoc, Timestamp } from '@angular/fire/firestore';
import { Auth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { User } from '../user.class';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private alertController:AlertController, 
              private auth:Auth,
              private firestore:Firestore) 
  { }

  async signinWithEmail(user:User)
{
  try {
    const regUser = await createUserWithEmailAndPassword(this.auth, user.email, user.password)
    return regUser;
  } catch (error) {
    return null;
  }
}

async logininWithEmail(user:User)
{
  try {
    const logUser = await signInWithEmailAndPassword(this.auth, user.email, user.password)
    return logUser;
  } catch (error) {
    return null;
  }
}

async cikisYap()
  {
    try {
      await signOut(this.auth);
      return true;
    } catch (error) {
      return error;
    }
  }

  async presentAlert(mesaj) {
    const alert = await this.alertController.create({
      header: 'Hata',
      message: mesaj,
      buttons: ['Tamam'],
    });
    await alert.present();
  }

  }
