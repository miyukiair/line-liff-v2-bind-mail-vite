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
const showCode = ref(false);
const showMail = ref(false);
const onSubmit = ref(false);

const mailSchema = yup.string().email().required();
const submit = async () => {
  onSubmit.value = true;

  if (validationCode.value.length === 0) {
    onSubmit.value = false;
    alert('請輸入認證碼');
    return;
  }

  if (userToken.value.length === 0) {
    const isMailValid = await mailSchema.isValid(inputEmail.value);
    if (isMailValid) {
      let res = await validateCodePost(validationCode.value, null, inputEmail.value)
    } else {
      onSubmit.value = false;
      alert('請輸入有效的信箱地址');
    }
  } else {
    let res = await validateCodePost(validationCode.value, userToken.value, null)
  }

  console.log("res: ", res);
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
  <p v-if="showCode">認證碼：<input type="email" v-model="validationCode" placeholder="請輸入認證碼"></p>
  <p v-if="showMail">收到認證碼的信箱：<input type="email" v-model="inputEmail" placeholder="請輸入收到認證碼的信箱"></p>

  <button v-if="showCode || showMail" type="button" class="btn" @click="submit()" :disabled="onSubmit">送出</button>
  <p v-else>認證中，請稍候...</p>
</template>
