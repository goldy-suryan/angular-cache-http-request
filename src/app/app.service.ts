import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AppService {

    endpoint: string = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http: HttpClient) { }

    getAllPosts() {
        return this.http.get(this.endpoint);
    }
}