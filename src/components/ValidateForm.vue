<script setup>
import {onMounted, ref} from 'vue'
import {validateCodePost} from '/src/service/api'
import * as yup from 'yup';
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.query)

const validationCode = ref("");
const userToken = ref("");
const inputEmail = ref("");
const result = ref("");
const showCode = ref(false);
const showMail = ref(false);
const onSubmit = ref(false);

const closeLiff = () => {
  liff.closeWindow();
}

const mailSchema = yup.string().email().required();
const submit = async () => {
  result.value = "";
  onSubmit.value = true;

  if (validationCode.value.length === 0) {
    onSubmit.value = false;
    alert('請輸入認證碼');
    return;
  }

  let res = null;
  if (userToken.value.length === 0) {
    const isMailValid = await mailSchema.isValid(inputEmail.value);
    if (isMailValid) {
      res = await validateCodePost(validationCode.value, null, inputEmail.value)
    } else {
      alert('請輸入有效的信箱地址');
    }
  } else {
    res = await validateCodePost(validationCode.value, userToken.value, null)
  }
  result.value = (res && res.data.message) || '';
  onSubmit.value = false;
}

onMounted(() => {
  validationCode.value = route.query.code || '';
  showCode.value = validationCode.value.length <= 0;

  liff.init({
    liffId: '1656419833-74JqODyP'
  }).then(() => {
    if (liff.isLoggedIn() && liff.isInClient()) {
      const user = liff.getDecodedIDToken();
      userToken.value = user && user.sub;
      if (!showCode.value && userToken.value.length > 0) {
        submit();
      } else {
        showMail.value = userToken.value.length <= 0
      }
    } else {
      showMail.value = true;
    }
  }).catch((err) => {
    console.log(err);
    showCode.value = true;
    showMail.value = true;
  });
});
</script>

<template>
  <p v-if="showCode" v-show="!onSubmit">認證碼：<input type="email" v-model="validationCode" placeholder="請輸入認證碼"></p>
  <p v-if="showMail" v-show="!onSubmit">收到認證碼的信箱：<input type="email" v-model="inputEmail" placeholder="請輸入收到認證碼的信箱"></p>
  <button v-if="showCode || showMail" v-show="!onSubmit" type="button" class="btn" @click="submit()" :disabled="onSubmit">送出</button>

  <p v-show="onSubmit">認證中，請稍候...</p>

  <template v-if="result.length > 0">
    <p>{{(result === 'success') ? '認證成功' : '認證失敗'}}</p>
    <button type="button" class="btn" @click="closeLiff">關閉</button>
  </template>
</template>
