import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
    URL_API = 'http://localhost:3000/api';

  constructor(private http: HttpClient,) { }

  getServer(url: string) {
    return new Promise((resolve, reject) => {
        this.http.get(this.URL_API + url).subscribe(
            (res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            }
        );
    });
}

postServer(url: string, params: any) {
    return new Promise((resolve, reject) => {
        this.http.post(this.URL_API + url, params).subscribe(
            (res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            }
        );
    });
}

putServer(url: string, params: any) {
    return new Promise((resolve, reject) => {
        this.http.put(this.URL_API + url, params).subscribe(
            (res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            }
        );
    });
}

deleteServer(url: string) {
    return new Promise((resolve, reject) => {
        this.http.delete(this.URL_API + url).subscribe(
            (res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            }
        );
    });
}
}
