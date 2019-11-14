import { Component, OnInit } from "@angular/core";
import { Post } from "../../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  samplePosts: Post[] = [
    {
      title: "I'm hungry",
      thought: "Someone should bring me food"
    },
    { title: "Tiffany", thought: "That's my baby right there." },
    { title: "Hades", thought: "That's a pretty cool name for a cat." }
  ];
  show: boolean;
  getSamplePosts(): Post[] {
    return this.samplePosts;
  }
  onDelete(index: number): void {
    this.samplePosts.splice(index, 1);
    return;
  }
  onSubmit(post: Post): void {
    this.samplePosts = [post, ...this.samplePosts];
    this.show = false;
  }
  constructor() {}

  ngOnInit() {
    this.samplePosts = this.getSamplePosts();
    console.log(this.samplePosts);
  }
}
