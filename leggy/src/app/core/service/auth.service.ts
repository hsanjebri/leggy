import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // ✅ This registers AuthService globally
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): boolean {
    // Example logic (replace with real API call)
    return username === 'admin' && password === 'admin';
  }
}
