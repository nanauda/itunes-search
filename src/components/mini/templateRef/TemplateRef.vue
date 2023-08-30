<template>
    <div>Template Ref</div>
    <input type="text" ref="mailAddressRef" v-model="mail">
</template>

<script lang="ts" setup>
import { Ref, onMounted, ref } from 'vue';

const mail = ref<string>('sample.ne.co.jp');
const mailAddressRef= ref<HTMLInputElement>();


onMounted(() => {
    mailAddressRef.value?.focus();
    console.log(mailAddressRef.value?.value);
})



</script>