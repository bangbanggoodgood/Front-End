<template>
  <a
    :href="href"
    target="_blank"
    class="flex items-center gap-2 bg-primary rounded-full text-white text-lg pl-4 pr-2 py-0.5"
    ><slot /><link-arrow-icon class="-translate-y-[1px]" />
  </a>
</template>

<script setup lang="ts">
import LinkArrowIcon from '@/components/ui/icons/LinkArrowIcon.vue'

export interface ExternalLinkProps {
  href: string
}

defineProps<ExternalLinkProps>()
</script>
