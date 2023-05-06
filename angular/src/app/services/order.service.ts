import {environment as env} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import * as moment from 'moment';

interface Hamburger {
  size: number;
  name: string;
}

const MENUS = ['맥스파이스버거', '더블치즈버거', '치킨버거', '제로버거'];

@Injectable()
export class OrderService {
  constructor(private hc: HttpClient) {}

  order(count: any) {
    let q = {
      orderDate: moment().format('YYYY-MM-DD'),
      hamburgerList: [] as Hamburger[],
      address: 'My Home',
    };

    for (let i = 0; i < count; i++) {
      const h = {} as Hamburger;
      h.size = i;
      h.name = MENUS[i % 4];
      q.hamburgerList.push(h);
    }

    return this.hc.post<any>(`${env.apiHost}/order`, q);
  }
}
