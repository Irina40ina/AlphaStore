import { isValidPassword, isValidEmail, hasSpecSymbols } from '@/utils/validation';

export default function useAuthValidation(password) {
    // Определяем функции для проверки правил
    const nameRules = [
        v => (v.length >= 3) || 'Имя должно состоять из 3 и более символов',
        v => (hasSpecSymbols(v)) || 'Имя не должно содержать !@#$%^&*()_-=+|{}[]/?.>,<\'`"~',
    ]
    const emailRules = [
        v => (isValidEmail(v)) || 'Введите корректный E-mail',
    ];

    const passwordRules = [
        v => (isValidPassword(v)) || 'Введите корректный пароль',
    ];

    const passwordRepeatCheckRules = [
        v => (v === password.value) || 'Пароли не совпадают',
    ];
    const phoneRules = [
        value => !!value || 'Номер телефона обязательное поле',
    ];
    
    return {
        nameRules,
        emailRules, 
        passwordRules,
        passwordRepeatCheckRules,
        phoneRules,
    }
}