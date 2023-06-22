import { defineStore } from 'pinia';
import { Post } from '@/models/Post';

interface PostState {
  posts: Post[];
}

export const usePostStore = defineStore('post', {
  state: (): PostState => ({
    posts: [],
  }),
  actions: {
    async getPosts() {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => (this.posts = data));
    },
  },
});
