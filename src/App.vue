<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import { event } from 'vue-gtag';

function trackEventGtag() {
  event('login', { method: 'Google' })
}

onMounted(() => {
  trackEventGtag()
});

</script>

<template>
  <Header />
  <RouterView />
</template>

