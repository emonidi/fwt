import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';
import {map} from 'rxjs/operators/map'
@Injectable()
export class TestService {

  constructor(private client: Http) { 
  }

  getCities() {
    return this.client.get(environment.baseUrl+'/cities')
  }
}
