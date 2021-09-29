<script setup>
import {onMounted, ref, defineEmits} from 'vue'
import {sendValidationCodePost} from '/src/service/api'
import * as yup from 'yup';

const userName = ref("");
const userToken = ref("");
const userEmail = ref("");
const inputEmail = ref("");
const onSubmit = ref(false);

const emit = defineEmits(['backStep', 'nextStep'])

const mailSchema = yup.string().email().required();
const submit = async (mail) => {
  onSubmit.value = true;
  const isMailValid = await mailSchema.isValid(mail);
  if (isMailValid) {
    sendValidationCodePost(userName.value, mail, userToken.value)
        .then((res) => {
          console.log("res: ", res);
          const result = res.data.message;
          emit('nextStep', result);
        })
        .catch((err) => {
          console.log("err: ", err);
        })
        .finally(() => {onSubmit.value = false});
  } else {
    onSubmit.value = false;
    alert('請輸入有效的信箱地址');
  }
}

onMounted(() => {
  liff.ready.then(() => {
    const user = liff.getDecodedIDToken();
    userName.value = user && user.name;
    userToken.value = user && user.sub;
    userEmail.value = user && user.email;
  })
})
</script>

<template>
  <template v-if="userEmail">
    <p>將發送身份認證碼到 {{ userEmail }}</p>
    <button type="button" class="btn" @click="submit(userEmail)" :disabled="onSubmit">確定</button>
  </template>

  <template v-else>
    <p>發送身份認證碼到 <input type="email" v-model="inputEmail" placeholder="請輸入 Email"></p>
    <button type="button" class="btn" @click="submit(inputEmail)" :disabled="onSubmit">確定</button>
  </template>
</template>
