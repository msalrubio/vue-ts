<script setup lang="ts">
  import { onMounted } from 'vue';
  import PostItem from '@/components/PostItem.vue';
  import PostLoading from '@/components/PostLoading.vue';
  import { usePostStore } from '@/stores/postStore';

  const postStore = usePostStore();

  onMounted(() => {
    setTimeout(() => {
      postStore.getPosts();
    }, 500);
  });
</script>

<template>
  <section class="dashboard">
    <div class="dashboard-posts">
      <template v-if="postStore.posts.length > 0">
        <PostItem v-for="post in postStore.posts" :key="post.id" :post="post" />
      </template>
      <template v-else>
        <PostLoading />
      </template>
    </div>
  </section>
</template>

<style scoped>
  .dashboard {
    max-width: 90rem;
    margin: 0 auto;
    padding: 2rem;
  }

  .dashboard-posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
</style>
