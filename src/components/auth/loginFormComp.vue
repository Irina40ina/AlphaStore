<template>
    <v-sheet class="mx-auto" :elevation="4" width="300">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          label="Введите логин"
        ></v-text-field>
  
        <v-text-field
          v-model.trim="password"
          :rules="passwordRules"
          label="Введите пароль"
        ></v-text-field>
  
        <v-btn class="mt-2" type="submit" block>Войти</v-btn>
        <v-btn class="mt-2" type="submit" block>Зарегистрироваться</v-btn>
      </v-form>
    </v-sheet>
  </template>
<script setup>
import { ref } from 'vue';
import { isValidPassword } from '@/utils/validation';

// Определяем реактивные переменные
const firstName = ref('');
const password = ref('');

// Определяем функции для проверки правил
const firstNameRules = [
  v => (v && v.length >= 3) || 'Имя должно содержать не менее 3 символов',
];

const passwordRules = [
  v => (isValidPassword(v)) || 'Введите корректный пароль',
];

</script>