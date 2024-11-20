<template>
  <Pagination
    class="flex justify-center"
    v-slot="{ page }"
    :total="totalItem"
    :items-per-page="itemsPerPage"
    :sibling-count="1"
    show-edges
    :default-page="defaultPage"
    v-on:update:page="(nextPage: number) => $emit('handleCurPage', nextPage)"
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
          <Button class="w-8 h-9 p-0" :variant="item.value === page ? 'default' : 'outline'">
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis class="text-primary" v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </Pagination>
</template>

<script setup lang="ts">
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'

interface PaginationProps {
  totalItem: number
  curPage: number
  itemsPerPage?: number
  defaultPage?: number
}

withDefaults(defineProps<PaginationProps>(), { itemsPerPage: 15, defaultPage: 1 })
defineEmits(['handleCurPage'])
</script>
