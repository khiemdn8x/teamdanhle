import * as _ from 'underscore';
export class Pagination {
    totalElements: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    displayPages: number[];

    constructor(totalElements: number, currentPage: number = 1, limit: number = 10) {
        this.totalElements = totalElements;
        this.limit = limit;
        this.currentPage = currentPage;
        this.totalPages = Math.ceil(totalElements / limit);
        this.startPage = 1;
        this.endPage = this.totalPages;
        if (this.totalPages > 10) {
            if (currentPage <= 6) {
                this.endPage = 10;
            } else if (currentPage + 4 >= this.totalPages) {
                this.startPage = this.totalPages - 9;
            } else {
                this.startPage = currentPage - 5;
                this.endPage = currentPage + 4;
            }

        }
        this.startIndex = (currentPage - 1) * limit;
        this.endIndex = Math.min(this.startIndex + limit - 1, totalElements - 1);
        this.displayPages = _.range(this.startPage, this.endPage + 1);
    }
}