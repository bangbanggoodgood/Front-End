<template>
  <span class="rounded-full bg-primary text-white text-sm px-3.5 py-1.5">
    {{ keyword }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  keyword: string
}
defineProps<Props>()
</script>
