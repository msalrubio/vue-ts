<script setup lang="ts">
  import { onMounted, computed } from 'vue';
  import PostItem from '@/components/PostItem.vue';
  import PostLoading from '@/components/PostLoading.vue';
  import { usePostStore } from '@/stores/postStore';

  const postStore = usePostStore();
  const postsToRender = computed(() => {
    return postStore.posts.slice(0, postStore.postsToShow);
  });

  onMounted(() => {
    setTimeout(() => {
      postStore.getPosts();
    }, 500);

    window.addEventListener('scroll', () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        postStore.loadMorePosts();
      }
    });
  });
</script>

<template>
  <section class="dashboard">
    <div class="dashboard-posts">
      <template v-if="postStore.posts.length > 0">
        <PostItem v-for="post in postsToRender" :key="post.id" :post="post" />
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
