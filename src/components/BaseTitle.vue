<template>
  <div>
    <h1 class="mb-5">{{title}}</h1>
  </div>
</template>
<script>
export default {
  name: 'BaseTitle',
  props: {
    title: String,
  },
};
</script>