<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  import { Post } from '@/models/Post';
  import PostItem from '@/components/PostItem.vue';

  let posts = reactive<Post[]>([]);
  onMounted(() => {
    setTimeout(() => {
      loadPosts();
    }, 2000);
  });

  const loadPosts = () => {
    console.log('Cargamos los posts');
    posts = [
      ...posts,
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      },
      {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
      },
      {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
      },
    ];
  };
</script>

<template>
  <section class="dashboard">
    <div class="dashboard-posts">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
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
