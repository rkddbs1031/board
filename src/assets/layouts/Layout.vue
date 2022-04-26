<template>
  <div class="wrap">
    <v-main>
      <v-container fluid class="page-wrapper">
        <v-container fluid class="pa-0">
          <BaseBreadcrumb :title="Bread.title" icon="page.icon" :breadcrumbs="Bread.text" />
        </v-container>
      </v-container>
      <router-view />
    </v-main>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import BaseBreadcrumb from '@/components/BaseBreadcrumb.vue';

export default {
  name: "Layout",
  components: {
    BaseBreadcrumb,
  },
  computed: {
    ...mapState( 'layout', ['breadcrumbs']),
    Bread: {
      get() {
        return this.breadcrumbs;
      },
    },
  },
};
</script>
