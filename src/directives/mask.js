import IMask from 'imask';

export default {
    name: 'mask',
    mounted: (el, binding) => {
        const input = el.querySelector('input');
        if(input) {
            IMask(input, {
                mask: binding.value,
            });
        }
    },
}

