import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getFromLocal(item: string): string {
    return localStorage.getItem(item);
  }

  getFromSession(item: string): string {
    return localStorage.getItem(item);
  }

  deleteFromLocal(item: string): void {
    localStorage.removeItem(item);
  }

  deleteFromSession(item: string): void {
    sessionStorage.removeItem(item);
  }

  addToLocal(item, value): void {
    localStorage.setItem(item, value);
  }

  addToSession(item, value): void {
    sessionStorage.setItem(item, value);
  }

  clearLocal(): void {
    localStorage.clear();
  }

  clearSession(): void {
    sessionStorage.clear();
  }

  clearAll(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
