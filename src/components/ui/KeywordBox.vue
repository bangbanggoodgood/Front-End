<template>
  <span class="text-sm mx-1">
    <span class="text-primary">#</span>
    {{ ' ' }}
    <span class="text-text">{{ keyword }}</span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  keyword: string
}
defineProps<Props>()
</script>
