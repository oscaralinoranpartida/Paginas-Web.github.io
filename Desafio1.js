function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}