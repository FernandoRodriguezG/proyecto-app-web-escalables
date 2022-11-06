import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient,) { }

  getServer(url: string) {
    return new Promise((resolve, reject) => {
        this.http.get('' + url).subscribe(
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
        this.http.post('' + url, params).subscribe(
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
        this.http.put('' + url, params).subscribe(
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
        this.http.delete('' + url).subscribe(
            (res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            }
        );
    });
}
}
