import { Post } from "./post";

export interface Response {
    status: string;
    data: Post[];
  }