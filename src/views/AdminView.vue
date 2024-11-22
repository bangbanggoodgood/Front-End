<template>
  <div class="w-base mx-auto">
    <section>
      <title-text>통계</title-text>
      <div class="grid grid-cols-2 gap-x-4 gap-y-20">
        <stat-graph :data="infraStatMock" type="infra" />
        <stat-graph :data="sexStatMock" type="sex" />
        <!-- <stat-graph :data="sexStatMock" type="infra" />
        <stat-graph :data="sexStatMock" type="infra" /> -->
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import StatGraph from '@/components/stat/StatGraph.vue'
import TitleText from '@/components/ui/typography/TitleText.vue'
import { infraStatMock, sexStatMock } from '@/mocks/data'
</script>
