function sendMail() {
    const email = "mithunbm6@gmail.com";
    const subject = "Interested in your profile";
    const body = "Hi Mithun,%0D%0A%0D%0AI saw your portfolio and would like to connect with you.";

    window.location.href =
        `mailto:${email}?subject=${subject}&body=${body}`;
}
