<template>
  <div class="w-base mx-auto flex flex-col gap-4">
    <section>
      <stat-container />
    </section>
    <section class="mb-10">
      <authority-container />
    </section>
  </div>
</template>

<script setup lang="ts">
import AuthorityContainer from '@/components/admin/authority/AuthorityContainer.vue'
import StatContainer from '@/components/admin/stat/StatContainer.vue'
</script>
