<template>
    <v-sheet class="mx-auto rounded" :elevation="4" width="300">
        <v-form fast-fail @submit.prevent>

            <v-text-field v-if="loginMode === 'email'" v-model="email" :rules="emailRules" label="Введите E-mail">
            </v-text-field>

            <v-text-field
            v-else-if="loginMode === 'phone'"
                v-model="phone"
                :rules="phoneRules"
                label="Введите номер телефона"
                v-mask="'+7(000)-000-00-00'"
            ></v-text-field>

            <v-text-field v-model.trim="password" :rules="passwordRules" label="Введите пароль"></v-text-field>

            <p class="text-auth-dialog" @click="changeLoginMode">{{ loginModeLable }}</p>

            <v-btn type="submit" block >Войти</v-btn>
            <p class="text-auth-dialog" @click.prevent="$router.push({ name: 'logup' })">Создать аккаунт</p>
        </v-form>
    </v-sheet>
</template>

<script setup>
import { ref, computed } from 'vue';
import { isValidPassword, isValidEmail } from '@/utils/validation';

// Определяем реактивные переменные
const email = ref('');
const phone = ref('');
const password = ref('');
let loginMode = ref('email'); // email | phone

const loginModeLable = computed(() => {
  if(loginMode.value === 'email') {
    return 'Войти по номеру телефона';
  } 
  else if(loginMode.value === 'phone') {
    return 'Войти по E-mail';
  }
  return '';
});
// Определяем функции для проверки правил
const emailRules = [
    v => (isValidEmail(v)) || 'Введите корректный E-mail',
];

const passwordRules = [
    v => (isValidPassword(v)) || 'Введите корректный пароль',
];

const phoneRules = [
    value => !!value || 'Номер телефона обязательное поле',
]
function changeLoginMode() {
  if(loginMode.value === 'email') {
    loginMode.value = 'phone';
  } 
  else if(loginMode.value === 'phone') {
    loginMode.value = 'email';
  }
}
</script>
<style scoped>
.text-auth-dialog {
  text-align: center;
  cursor: pointer;
  color: var(--basic-fg);
  font-family: var(--basic-font);
  margin: .5rem 0;
  transition: all .3s ease;
}
.text-auth-dialog:hover {
color: var(--card-title-fg);
transition: all .3s ease;
}
</style>