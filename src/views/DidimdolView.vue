<template>
  <div class="w-base mx-auto">
    <title-text>디딤돌 대출이란?</title-text>
    <section class="flex flex-col gap-8">
      <article class="bg-white border p-4 rounded-lg shadow-md text-gray-800">
        정부의 주택금융 지원제도(생애최초, 우대형 보금자리 론)를 하나로 통합하여 최저수준의 금리로
        가계빚 부담 은 덜고 내 집 마련의 문턱은 낮춘 새로운 개념의 주택 담보대출
      </article>
      <div class="flex justify-between gap-5">
        <info-card v-for="info in didimdolDescriptionInfo" :info="info" class="w-full" />
      </div>
    </section>
    <interest-rate-table />
    <title-text>바로가기</title-text>
    <section class="flex gap-4 mb-8">
      <external-link href="https://www.hf.go.kr/ko/sub01/sub01_02_01.do"
        >디딤돌 대출 소개</external-link
      >
      <external-link href="https://www.hf.go.kr/ko/sub01/sub01_06_02.do"
        >대출가능금액 조회</external-link
      >
      <external-link href="https://bank.hf.go.kr/">디딤돌 대출 신청</external-link>
    </section>
  </div>
</template>

<script setup lang="ts">
import InfoCard from '@/components/didimdol/InfoCard.vue'
import InterestRateTable from '@/components/didimdol/InterestRateTable.vue'
import ExternalLink from '@/components/ui/ExternalLink.vue'
import TitleText from '@/components/ui/typography/TitleText.vue'
import { didimdolDescriptionInfo } from '@/lib/didimdol'
</script>
