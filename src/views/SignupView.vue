<template>
  <div class="m-auto -translate-y-16">
    <h1 class="text-4xl text-[#00B2FF] mb-6">Sign Up</h1>
    <div class="flex flex-col gap-6 w-[30rem] p-8 border border-border rounded-xl bg-white">
      <div class="border border-gray-300 rounded-xl divide-y">
        <div class="p-2">
          <Input
            class="bg-white w-full rounded-none border-none text-base"
            type="text"
            placeholder="이름"
            v-model="name"
          />
        </div>
        <div class="p-2">
          <Input
            class="bg-white w-full rounded-none border-none text-base"
            type="text"
            placeholder="생년월일(YY.MM.DD)"
            v-model="birth"
          />
        </div>
        <div class="p-2">
          <div class="flex border divide-x text-sm rounded-lg">
            <button
              class="flex-1 py-2 rounded-l-lg"
              :class="{ 'outline outline-1 outline-primary z-50': sex === 'male' }"
              @click="sex = 'male'"
              type="button"
            >
              남성
            </button>
            <button
              class="flex-1 py-2"
              :class="{ 'outline outline-1 outline-primary z-50': sex === 'female' }"
              @click="sex = 'female'"
              type="button"
            >
              여성
            </button>
            <button
              class="flex-1 py-2 rounded-r-lg"
              :class="{ 'outline outline-1 outline-primary z-50': sex === 'none' }"
              @click="sex = 'none'"
              type="button"
            >
              선택안함
            </button>
          </div>
        </div>
        <div class="p-2">
          <div class="relative">
            <input
              class="bg-white w-full rounded-none border-none text-base px-3 py-2 focus:outline-none"
              placeholder="직업"
              v-model="job"
              ref="jobInputRef"
              @focus="jobDropDown = true"
            />
            <drop-down-list
              class="cursor-pointer"
              v-show="jobDropDown && computedJobs.length > 0"
              :list="computedJobs"
              @onClick="handleJobClick"
            />
          </div>
        </div>
      </div>
      <Button class="w-full" variant="filled" @click="signup">회원가입</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import DropDownList from '@/components/ui/DropDownList.vue'
import Input from '@/components/ui/input/Input.vue'
import { validateBirthDate } from '@/util/date'
import { jobs } from '@/lib/job'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const name = ref('')
const birth = ref('')
const sex = ref('none')
const jobDropDown = ref(false)
const job = ref('')
const jobInputRef = ref<any>(null)

const handleOutsideClick = (event: MouseEvent) => {
  const element = jobInputRef.value
  if (element && element.contains) {
    if (!element.contains(event.target as Node)) {
      jobDropDown.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
})

const computedJobs = computed(() => {
  if (job.value === '') return [...jobs]
  return jobs.filter((item) => item.includes(job.value))
})

const handleJobClick = (item: string) => {
  job.value = item
}

const signup = () => {
  if (name.value === '' || birth.value === '' || job.value === '') {
    alert('모든 항목을 입력해주세요.')
    return
  }
  if (!validateBirthDate(birth.value)) {
    alert('생년월일을 확인해주세요.')
    return
  }
  if (!jobs.includes(job.value as (typeof jobs)[number])) {
    alert('직업은 목록 중에서 선택해주세요.')
    return
  }
  alert('회원가입 성공')
}
</script>
