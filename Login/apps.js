function pasuser(form) {
    if (form.id.value == "javascript") {
        if (form.pass.value == "kit") {
            location = "page2.html"
        } else {
            alery("Invalid Password")
        }
    } else {
        alert("Invalid UserID")
    }
}