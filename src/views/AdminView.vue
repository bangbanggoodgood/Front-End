<template>
  <div v-if="isAdmin" class="w-base mx-auto flex flex-col gap-4">
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
import { userRole } from '@/lib/user'
import { useUserStore } from '@/stores/user'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const isAdmin = computed(() => userStore.role === userRole.admin)

onMounted(() => {
  if (!isAdmin.value) {
    router.push({ name: 'home' })
  }
})
</script>
