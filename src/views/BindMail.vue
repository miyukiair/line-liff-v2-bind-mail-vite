<script setup>
import {onMounted, ref, provide} from 'vue'
import BindMailForm from "/@/components/BindMailForm.vue";
import BindMailResult from "/@/components/BindMailResult.vue";

const errorMsg = ref("");
const bindStep = ref('form');
const resMessage = ref('');
provide('resMessage', resMessage);

const next = (event) => {
  resMessage.value = event
  bindStep.value = 'result'
}

const back = () => {
  resMessage.value = ""
  bindStep.value = 'form'
}

const initializeApp = () => {
  if (!liff.isLoggedIn() || !liff.isInClient()) {
    errorMsg.value = "please use line liff open";
  }
};

onMounted(() => {
  liff.init({
    liffId: '1656419833-74JqODyP'
  }).then(() => {
    initializeApp();
  }).catch((err) => {
    errorMsg.value = "initialize LIFF fail";
  });
});
</script>

<template>
  <h1>驗證碼小幫手 - 身份認證</h1>
  <component v-if="!errorMsg" :is="(bindStep === 'form') ? BindMailForm : BindMailResult" @backStep="back" @nextStep="next"></component>
  <p v-else class="error">{{ errorMsg }}</p>
</template>
