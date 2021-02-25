class Bank {
    static getAccountDetails() {
        var accountdetails = {
            1000: { accno: 1000, name: "username", balance: "6000", password: "user1" },
            1001: { accno: 1001, name: "username", balance: "9000", password: "user2" },
            1002: { accno: 1002, name: "username", balance: "6000", password: "user3" },
            1003: { accno: 1003, name: "username", balance: "9000", password: "user4" },
            1004: { accno: 1004, name: "username", balance: "6000", password: "user5" }


        }
        return accountdetails
    }

    static login() {
        let accno = document.querySelector("#accno").value;
        let pswd = document.querySelector("#pwd").value;
        alert(accno, pswd)
        let data = Bank.getAccountDetails()
        if (accno in data) {
            if (pswd == data[accno]["password"]) {
                alert("authentication success")
                window.location.href="userhome.html";
            }
            else {
                alert("invalid password")
            }

        }

    }
}


