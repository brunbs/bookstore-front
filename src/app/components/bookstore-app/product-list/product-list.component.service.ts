import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/book";

@Injectable()

export class BookService {
    private url = 'https://sheet.best/api/sheets/c807d7ec-b2b9-4135-a671-d14e6254cc8a';
    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor (private httpClient: HttpClient) { }

    getBook() {
        return this.httpClient.get(this.url);
    }
}