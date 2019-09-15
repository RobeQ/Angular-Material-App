import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';
import { AppError } from '../common/app-error';
import { throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private url, private http: HttpClient) { };

    getAll() {
        return this.http.get(this.url)
            .pipe(
                map(response => JSON.parse(JSON.stringify(response))),
                catchError(this.handleError));
    };

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(
                map(response => JSON.parse(JSON.stringify(response))),
                catchError(this.handleError));
    };

    update(resource) {
        return this.http.patch(this.url + "/" + resource.id, JSON.stringify(resource))
            .pipe(
                map(response => JSON.parse(JSON.stringify(response))),
                catchError(this.handleError));
    };

    delete(id) {
        return this.http.delete(this.url + "/" + id)
            .pipe(
                map(response => JSON.parse(JSON.stringify(response))),
                catchError(this.handleError));
    };

    private handleError(error: Response) {
        if (error.status === 404)
            return throwError(new NotFoundError(error));
        if (error.status === 400)
            return throwError(new BadInputError(error));

        return throwError(new AppError(error));
    };
}
