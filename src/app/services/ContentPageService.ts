

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentPageService {

  private apiUrl = 'https://example.com/api/content-page';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(`${this.apiUrl}/config`).toPromise().then(response => response).catch(error => console.error('Error getting config:', error));
  }

  updateConfig(config) {
    if (!config || typeof config !== 'object') {
      throw new Error('Invalid config object');
    }
    return this.http.put(`${this.apiUrl}/config`, config).toPromise().then(response => response).catch(error => console.error('Error updating config:', error));
  }

}