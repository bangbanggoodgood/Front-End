<template>
  <table class="border">
    <tbody class="divide-y">
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-1.5 bg-background col-span-2">시공</td>
        <td class="flex items-center px-3 py-1.5 text-sm col-span-7">{{ buildYear }}년</td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-1.5 bg-background col-span-2">면적</td>
        <td class="flex items-center px-3 py-1.5 text-sm col-span-7">
          {{ minArea }}m² ~ {{ maxArea }}m²
        </td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-1.5 bg-background col-span-2">주소</td>
        <td class="flex items-center px-3 py-1.5 text-sm col-span-7">{{ address }}</td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-1.5 bg-background col-span-2">매매가</td>
        <td class="flex items-center px-3 py-1.5 text-sm col-span-7">
          {{ numberToKrMoney(minDealAmount) }} ~ {{ numberToKrMoney(maxDealAmount) }} 원
        </td>
      </tr>
      <tr class="grid grid-cols-9 divide-x">
        <td class="flex justify-center items-center py-1.5 bg-background col-span-2">인프라</td>
        <td class="flex flex-col px-3 py-1.5 text-sm col-span-7">
          <span v-for="item in Object.entries(infra)">
            {{ infraToKr[item[0] as TInfra] }}: {{ item[1] }}개
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { TApartment, TInfra, TInfraKr } from '@/model'
import { numberToKrMoney } from '@/util/money'
import { infraToKr } from '@/lib/infra'

export interface ApartmentInfoTableProps {
  apartment: TApartment
}
const props = defineProps<ApartmentInfoTableProps>()
const { buildYear, minArea, maxArea, address, minDealAmount, maxDealAmount, infra } =
  props.apartment
</script>

<style scoped></style>
