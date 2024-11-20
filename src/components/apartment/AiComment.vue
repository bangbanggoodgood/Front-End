<template>
  <div
    class="w-80 p-2 text-sm text-center break-keep bg-white border border-border shadow-lg rounded-lg"
  >
    {{ introduce }}
  </div>
</template>

<script setup lang="ts">
import type { TApartment } from '@/model'

defineProps<Pick<TApartment, 'introduce'>>()
</script>
