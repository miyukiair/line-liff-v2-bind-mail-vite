<template>
  <p>{{(result === 'success') ? '已將驗證碼發送至信箱' : '發送失敗，請稍後再試'}}</p>
  <div class="inline-btns">
    <button type="button" class="btn" @click="emit('backStep')" :disabled="backDisabled">
      再次發送
      <span v-if="interval < 60000">({{60 - Math.floor(interval/1000)}})</span>
    </button>
    <button type="button" class="btn" @click="closeLiff">關閉</button>
  </div>
</template>

<script setup>
import {ref, inject, onMounted} from "vue";

const start = ref(null);
const interval = ref(0);
const backDisabled = ref(true);
const emit = defineEmits(['backStep', 'nextStep']);

const result = inject('resMessage');
const closeLiff = () => {
  liff.closeWindow();
}

const countDown = (timestamp) => {
  if (!start.value) start.value = timestamp;
  interval.value = timestamp - start.value;
  if (interval.value < 60000) {
    window.requestAnimationFrame(countDown);
  } else {
    backDisabled.value = false;
  }
}

onMounted(() => {
  start.value = null;
  window.requestAnimationFrame(countDown);
})
</script>
