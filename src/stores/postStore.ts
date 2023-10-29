import { defineStore } from 'pinia';
import { Post } from '@/models/Post';

interface PostState {
  posts: Post[];
  postsToShow: number;
}

const MAX_POSTS = 12;

export const usePostStore = defineStore('post', {
  state: (): PostState => ({
    posts: [],
    postsToShow: MAX_POSTS,
  }),
  actions: {
    async getPosts() {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => (this.posts = data));
    },
    loadMorePosts() {
      if (this.posts.length > this.postsToShow) {
        this.postsToShow += MAX_POSTS;
      }
    },
  },
});
