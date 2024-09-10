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
            <div class="w-100 px-2 mb-3">
              <p class="text-auth-dialog" @click="changeLoginMode">{{ loginModeLabel }}</p>
              <router-link class="text-auth-dialog" :to="{ name: 'logup' }">Если нет аккаунта, <span style="color: var(--card-title-fg);">зарегистрируйтесь</span></router-link>
            </div>

            <v-btn type="submit" block >Войти</v-btn>
        </v-form>
    </v-sheet>
</template>

<script setup>
import { ref, computed } from 'vue';
import useAuthValidation from '@/composables/validation/auth.js';

// ##############################  COMPOSABLES  ##############################
const {  
  emailRules, 
  passwordRules,
  phoneRules,
} = useAuthValidation();


// ##############################  DATA  ##############################
// Определяем реактивные переменные
const email = ref('');
const phone = ref('');
const password = ref('');
let loginMode = ref('email'); // email | phone


// ##############################  COMPUTED  ##############################
const loginModeLabel = computed(() => {
  if(loginMode.value === 'email') {
    return 'Войти по номеру телефона';
  } 
  else if(loginMode.value === 'phone') {
    return 'Войти по E-mail';
  }
  return '';
});

// ##############################  METHODS  ##############################
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
  cursor: pointer;
  color: var(--basic-fg);
  font-size: 13px;
  font-family: var(--basic-font);
  transition: all .3s ease;
}
.text-auth-dialog:hover {
  color: var(--card-title-fg);
  transition: all .3s ease;
}
</style>