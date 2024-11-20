<template>
  <table class="border border-border text-center">
    <thead>
      <tr class="grid grid-cols-4 bg-background divide-x py-0.5">
        <th>계약월</th>
        <th>매매가</th>
        <th>면적</th>
        <th>층</th>
      </tr>
    </thead>
    <tbody class="text-sm text-gray-700 divide-y">
      <tr v-for="deal in deals" :key="deal.id" class="grid grid-cols-4 divide-x hover:bg-slate-50">
        <td>{{ deal.dealDate }}</td>
        <td>{{ numberToKrMoney(deal.price) }}</td>
        <td>{{ deal.area }}</td>
        <td>{{ deal.floor }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { TDeal } from '@/model'
import { numberToKrMoney } from '@/util/money'

export interface DealTableProps {
  deals: TDeal[]
}

defineProps<DealTableProps>()
</script>
