axios.get("/csrfToken").then(function (res) {
    var forms = document.querySelectorAll("form");

    for (var form of forms) {
        var csrfInput = document.createElement("input");
        csrfInput.setAttribute("type", "hidden");
        csrfInput.setAttribute("name", "_csrf");
        csrfInput.setAttribute("value", res.data.token);
        form.appendChild(csrfInput);
    }
});
