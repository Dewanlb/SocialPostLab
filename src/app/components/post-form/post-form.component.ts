import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { from } from "rxjs";
import { Post } from "src/app/interfaces/post";
@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  newPost: Post = { title: "", thought: "" };
  constructor() {}
  submitPost() {
    this.submitted.emit(this.newPost);
    this.newPost = {
      title: "",
      thought: ""
    };
  }
  ngOnInit() {}
}
