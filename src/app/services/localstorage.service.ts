import { Injectable } from '@angular/core';
const keyName = 'whitelist';
@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  get(): { name: string; tels: string[] }[] | null {
    const jsonText = localStorage.getItem(keyName);

    return JSON.parse(jsonText ?? 'null');
  }

  set(data: { name: string; tels: string[] }[]): void {
    const jsonText = JSON.stringify(data);

    localStorage.setItem(keyName, jsonText);
  }
}
