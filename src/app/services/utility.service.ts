

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
  }

  isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  convertToTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}