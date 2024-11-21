<template>
  <title-text
    >디딤돌 대출 금리
    <span class="text-sm text-text"
      >({{ formattedDate(interestRate.applyDate as string) }} 기준)</span
    ></title-text
  >
  <table class="w-full text-center text-sm border border-gray-300">
    <thead>
      <tr
        class="grid grid-cols-6 divide-x divide-gray-300"
        style="background-color: rgba(109, 211, 255, 20%)"
      >
        <th class="col-span-2">소득수준(부부 합산 연소득)</th>
        <th>10년</th>
        <th>15년</th>
        <th>20년</th>
        <th>30년</th>
      </tr>
    </thead>
    <tbody class="bg-white text-sm text-gray-700 divide-y">
      <tr class="grid grid-cols-6 divide-x hover:bg-slate-50">
        <td class="col-span-2">2천만원 이하</td>
        <td>연 {{ interestRate.tenTwo }}%</td>
        <td>연 {{ interestRate.fifteenTwo }}%</td>
        <td>연 {{ interestRate.twentyTwo }}%</td>
        <td>연 {{ interestRate.thirtyTwo }}%</td>
      </tr>
      <tr class="grid grid-cols-6 divide-x hover:bg-slate-50">
        <td class="col-span-2">4천만원 이하</td>
        <td>연 {{ interestRate.tenFour }}%</td>
        <td>연 {{ interestRate.fifteenFour }}%</td>
        <td>연 {{ interestRate.twentyFour }}%</td>
        <td>연 {{ interestRate.thirtyFour }}%</td>
      </tr>
      <tr class="grid grid-cols-6 divide-x hover:bg-slate-50">
        <td class="col-span-2">6천만원 이하</td>
        <td>연 {{ interestRate.tenSix }}%</td>
        <td>연 {{ interestRate.fifteenSix }}%</td>
        <td>연 {{ interestRate.twentySix }}%</td>
        <td>연 {{ interestRate.thirtySix }}%</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import TitleText from '@/components/ui/typography/TitleText.vue'
import { formattedDate } from '@/util/date'
import type { TInterestRate } from '@/model'

const interestRate = ref<TInterestRate>({
  tenTwo: '',
  fifteenTwo: '',
  twentyTwo: '',
  thirtyTwo: '',
  tenFour: '',
  fifteenFour: '',
  twentyFour: '',
  thirtyFour: '',
  tenSix: '',
  fifteenSix: '',
  twentySix: '',
  thirtySix: '',
  applyDate: '',
})

onMounted(async () => {
  const res = await axios.get('https://apis.data.go.kr/B551408/didimdol-loan-rate/didimdol-info', {
    params: {
      serviceKey:
        'PaZb5dEewreN8FtOr0qdXnqaBr+DyyMq6zTaLKkmtTUZkFN/i1zWlmA4csRkOL75/y4TMkWsWX1agUh4Ia1GZA==',
      pageNo: 1,
      numOfRows: 10,
    },
  })
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(res.data, 'text/xml')
  interestRate.value['tenTwo'] = xmlDoc.getElementsByTagName('interest_10y_2000')[0].childNodes[0]
    .nodeValue as string
  interestRate.value['fifteenTwo'] = xmlDoc.getElementsByTagName('interest_15y_2000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['twentyTwo'] = xmlDoc.getElementsByTagName('interest_20y_2000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['thirtyTwo'] = xmlDoc.getElementsByTagName('interest_30y_2000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['tenFour'] = xmlDoc.getElementsByTagName('interest_10y_4000')[0].childNodes[0]
    .nodeValue as string
  interestRate.value['fifteenFour'] = xmlDoc.getElementsByTagName('interest_15y_4000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['twentyFour'] = xmlDoc.getElementsByTagName('interest_20y_4000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['thirtyFour'] = xmlDoc.getElementsByTagName('interest_30y_4000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['tenSix'] = xmlDoc.getElementsByTagName('interest_10y_6000')[0].childNodes[0]
    .nodeValue as string
  interestRate.value['fifteenSix'] = xmlDoc.getElementsByTagName('interest_15y_6000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['twentySix'] = xmlDoc.getElementsByTagName('interest_20y_6000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['thirtySix'] = xmlDoc.getElementsByTagName('interest_30y_6000')[0]
    .childNodes[0].nodeValue as string
  interestRate.value['applyDate'] = xmlDoc.getElementsByTagName('applyDy')[0].childNodes[0]
    .nodeValue as string
})
</script>

<style scoped>
th,
td {
  padding: 0.7rem;
}
</style>
