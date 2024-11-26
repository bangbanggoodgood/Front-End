<template>
  <ul
    class="absolute top-10 left-0 text-center w-full max-h-48 overflow-auto divide-y border bg-white"
  >
    <li
      class="py-1 px-4 hover:bg-background"
      v-for="item in list"
      :id="item"
      @click="onClick(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

export interface DropDownListProps {
  list: string[]
}

defineProps<DropDownListProps>()

const emit = defineEmits(['onClick'])

const onClick = (item: string) => {
  emit('onClick', item)
}
</script>
