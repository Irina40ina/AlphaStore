<template>
    <v-sheet class="mx-auto rounded" :elevation="4" width="300">
        <v-form fast-fail @submit.prevent>

            <v-text-field v-model="name" :rules="nameRules" label="Введите имя">
            </v-text-field>

            <v-text-field v-model="email" :rules="emailRules" label="Введите E-mail">
            </v-text-field>

            <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Введите номер телефона"
                v-mask="'+7(000)-000-00-00'"
            ></v-text-field>

            <v-text-field v-model.trim="password" :rules="passwordRules" :type="typePassword" label="Введите пароль">
                <template #append>
                    <v-icon class="icon-open-eye" :class="isOpenedPassword? 'unvisible' : ''" color="var(--icon-color)" icon="mdi-eye-outline" size="small" @click="changeVisiblePassword"></v-icon>
                    <v-icon class="icon-close-eye" :class="isClosedPassword? 'visible' : ''" color="var(--icon-color)" icon="mdi-eye-off-outline" size="small" @click="changeVisiblePassword"></v-icon>
                </template>
            </v-text-field>
            <v-text-field v-model.trim="passwordCheck" :rules="passwordCheckRules" :type="typePasswordCheck" label="Введите пароль ещё раз">
                <template #append>
                    <v-icon class="icon-open-eye" :class="isOpenedPasswordCheck? 'unvisible' : ''" color="var(--icon-color)" icon="mdi-eye-outline" size="small" @click="changeVisiblePasswordCheck"></v-icon>
                    <v-icon class="icon-close-eye" :class="isClosedPasswordCheck? 'visible' : ''" color="var(--icon-color)" icon="mdi-eye-off-outline" size="small" @click="changeVisiblePasswordCheck"></v-icon>
                </template>
            </v-text-field>

            <v-btn class="mb-2" type="submit" block >Зарегистрироваться</v-btn>
        </v-form>
    </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import { isValidPassword, isValidEmail, hasSpecSymbols } from '@/utils/validation';

// Определяем реактивные переменные
const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const passwordCheck = ref('');
const isOpenedPassword = ref(false);
const isClosedPassword = ref(false);
const isOpenedPasswordCheck = ref(false);
const isClosedPasswordCheck = ref(false);
const typePassword = ref('password');
const typePasswordCheck = ref('password');

// Определяем функции для проверки правил
const nameRules = [
    v => (v.length > 3 && hasSpecSymbols(v)) || 'Имя должно состоять из 3 и более символов, не должно содержать !@#$%^&*()_-=+|{}[]/?.>,<\'`"~'
]
const emailRules = [
    v => (isValidEmail(v)) || 'Введите корректный E-mail',
];

const passwordRules = [
    v => (isValidPassword(v)) || 'Введите корректный пароль',
];

const passwordCheckRules = [
    v => (v === password.value) || 'Пароли не совпадают'
]
const phoneRules = [
    value => !!value || 'Номер телефона обязательное поле',
]
const changeVisiblePassword = () => {
    if(isOpenedPassword.value === false) {
        isOpenedPassword.value = true;
        typePassword.value = '';
        isClosedPassword.value = true;
    } else if(isOpenedPassword.value === true) {
        isOpenedPassword.value = false;
        typePassword.value = 'password';
        isClosedPassword.value = false;
    }
    return
}
const changeVisiblePasswordCheck = () => {
    if(isOpenedPasswordCheck.value === false) {
        isOpenedPasswordCheck.value = true;
        typePasswordCheck.value = '';
        isClosedPasswordCheck.value = true;
    } else if(isOpenedPasswordCheck.value === true) {
        isOpenedPasswordCheck.value = false;
        typePasswordCheck.value = 'password';
        isClosedPasswordCheck.value = false;
    }
    return
}

</script>
<style scoped>
.icon-open-eye {
    margin-right: 1rem;
    cursor: pointer;
}
.icon-open-eye.unvisible {
    display: none;
}
.icon-close-eye {
    display: none;
    margin-right: 1rem;
    cursor: pointer;
}
.icon-close-eye.visible {
    display: block;
}
</style>