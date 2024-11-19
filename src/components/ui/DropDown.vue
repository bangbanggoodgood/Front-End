<template>
  <div
    class="relative flex justify-between items-center w-full rounded-full bg-background border border-primary h-10 px-2 cursor-pointer"
    @click.stop="$emit('toggleDropDown')"
  >
    <span class="flex-grow text-center">{{ placeholder }}</span>
    <DropDownArrowIcon />
    <template v-if="isOpened">
      <div class="absolute top-10 left-0 text-center w-fully border" v-if="list.length === 0">
        {{ alt }}
      </div>
      <DropDownList v-else :list="list" @onClick="onClick" />
    </template>
    <!-- <DropDownList v-if="true" :list="list" @onClick="onClick" /> -->
  </div>
</template>

<script setup lang="ts">
import type { TDropDown } from '@/model'
import DropDownArrowIcon from './icons/DropDownArrowIcon.vue'
import DropDownList from './DropDownList.vue'

defineProps<TDropDown>()

const emit = defineEmits(['onClick', 'toggleDropDown'])

const onClick = (item: string) => {
  emit('onClick', item)
}
</script>
