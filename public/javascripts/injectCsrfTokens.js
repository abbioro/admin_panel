axios.get('/csrfToken').then(function (res) {
    var csrfInputs = document.querySelectorAll('input.csrf');
    for (var csrfInput of csrfInputs) {
        csrfInput.value = res.data.token;
    }
});
