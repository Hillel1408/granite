const phoneInput = document.querySelectorAll('.phone-input');

phoneInput.forEach((item) => {
    const phoneMask = new IMask(item, {
        mask: '+{7}(000)000-00-00',
    });
});
