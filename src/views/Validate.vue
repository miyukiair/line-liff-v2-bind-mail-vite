<template>
  <ValidateForm/>
</template>

<script>
import { defineComponent } from "vue";
import ValidateForm from "/@/components/ValidateForm.vue";

export default defineComponent({
  name: "Validate",
  components: {
    ValidateForm,
  },
});
</script>
