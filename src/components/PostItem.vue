<script setup lang="ts">
  import { Post } from '@/models/Post';
  const props = defineProps<{
    post: Post;
  }>();
</script>

<template>
  <article class="card">
    <article>
      <a href="#" :aria-label="props.post.title">
        <img class="card-img" src="https://via.placeholder.com/150/24f355" />
        <div class="card-info">
          <h3>{{ props.post.title }}</h3>
          <p class="card-lead">
            {{ props.post.body }}
          </p>
        </div>
      </a>
    </article>
  </article>
</template>

<style scoped>
  .card {
    min-height: 10rem;
    background: #fff;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .card a {
    color: #333;
    text-decoration: none;
  }
  .card:hover,
  .card:focus {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(-0.5rem);
  }
  .card-img {
    width: 100%;
  }
  .card-info {
    padding: 0 1rem 1rem;
  }
</style>
