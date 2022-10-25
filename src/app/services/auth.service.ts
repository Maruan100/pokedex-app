import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {}

  public saveItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    const userData: { email: string, password: string } = JSON.parse(localStorage.getItem(key) || '{}');
    return userData;
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
