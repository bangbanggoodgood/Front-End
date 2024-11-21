<template>
  <div class="flex-grow flex flex-row"><SideBar /><HomeMap /></div>
  <!-- <div class="w-md mx-auto">
    <title-text>즐겨찾기</title-text>
    <ul class="grid grid-cols-3 gap-4">
      <li class="w-full mb-3" v-for="apartment in apartments" :id="apartment.id.toString()">
        <apartment-card :apartment="apartment" :need-ai="false" />
      </li>
      <li class="w-full mb-3" v-for="apartment in apartments" :id="apartment.id.toString()">
        <apartment-card :apartment="apartment" />
      </li>
    </ul>
  </div> -->
</template>

<script setup lang="ts">
import HomeMap from '@/components/map/HomeMap.vue'
import SideBar from '@/components/home/SideBar.vue'
import TitleText from '@/components/ui/typography/TitleText.vue'
import { apartments } from '@/mocks/data'
import ApartmentCard from '@/components/apartment/ApartmentCard.vue'
</script>
