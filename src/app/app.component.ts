import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts;

  constructor(private appService: AppService) { }
  title = 'app';

  ngOnInit() {
    // this.getAllPosts();
  }

  getAllPosts() {
    this.appService.getAllPosts().subscribe(
      posts => this.posts = posts
    );
  }
}
