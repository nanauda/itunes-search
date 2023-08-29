<script setup lang="ts">
import { Ref, computed, reactive, ref } from 'vue';
import ReactiveChild from './ReactiveChild.vue';

interface User {
    firstName: string,
    lastName: string,
    age: number,
}

// リアクティブな値だとしてもconstで良い
const count = ref(0);
// const count2: Ref<number> = ref(0); 型推論により結果的には同じ
// count.value = 'ss' ※型推論によりNG

const user = reactive({} as User)
user.firstName="John",
user.lastName="Doe",
user.age = 25;

// computed
const fullName = computed(() => `${user.firstName} - ${user.lastName} (${user.age})`)

// method
const changeAge = (age: number) : void => {
    user.age = age;
}

</script>

<template>
    <div>Count:{{ count }}</div>
    <button @click="count++">Add Count</button>
    <ReactiveChild :fullName="fullName" :user="user" @changeAge="changeAge"/>
</template>