import { Injectable } from '@angular/core';
import { Pagination } from '../bean/pagination';
import * as _ from 'underscore';

@Injectable()
export class PaginationService {
  getPagination(totalElements: number, currentPage: number = 1, limit: number = 10) {
    return new Pagination(totalElements,currentPage,limit);
  }
}
