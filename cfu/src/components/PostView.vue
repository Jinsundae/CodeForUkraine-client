<template>
  <div v-for="post in postList" :key="post">
      <h2>{{ post.title }}</h2>
      <h5>{{ post.date }}</h5>
      <p>{{ post.content }}</p>
  </div>
</template>

<script>
export default {
    name: "PostView",
    props: {
        'postList': Array,
    }
}
</script>

<style>

</style>