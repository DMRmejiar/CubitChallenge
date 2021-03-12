import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://reqres.in/api/';
  }

  getAll(): any{
    return this.httpClient.get(this.baseUrl+'users');
  }

  getByPage(pPage: number): Promise<any> {
    return this.httpClient.get(this.baseUrl+'users?page='+pPage).toPromise();
  }
  
  getById(pId: number): Promise<any> {
    return this.httpClient.get(this.baseUrl+'users/'+pId).toPromise();
  }
}
