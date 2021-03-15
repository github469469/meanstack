class Bank {
    static getAccountDetails() {
        var accountdetails = {
            1000: { accno: 1000, name: "username", balance: 6000, password: "user1" },
            1001: { accno: 1001, name: "username", balance: 9000, password: "user2" },
            1002: { accno: 1002, name: "username", balance: 6000, password: "user3" },
            1003: { accno: 1003, name: "username", balance: 9000, password: "user4" },
            1004: { accno: 1004, name: "username", balance: 6000, password: "user5" }


        }
        return accountdetails
    }
     static authenticateuser(accno,password)
     {
         let data = Bank.getAccountDetails()
         if(accno in data){
            if(password==data[accno]["password"]){
                return 0//valid credentials
            }
            else{

                return 1//invalid password
            }




         }
         else{
             return -1// invalid account number
         }
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
static withdraw(){

    let accno = document.querySelector("#accno").value;
    let pswd = document.querySelector("#pwd").value;
    let amount = document.querySelector("#amt").value;
    let data = Bank.getAccountDetails()
    let user = Bank.authenticateuser(accno,pswd)
    if(user==0){
      if (amount>data[accno]["balance"]){
          alert("insufficent balance ")
      }
     else{
         data[accno]["balance"]-=number(amount)
         alert("balance of account is:" +data[accno]["balance"] )
     }
    }
    else if(user==1){
        alert("inavlid password")
    } 
    else
    {
        alert("invalid accno")
    }

    }



    static deposit(){

        let accno = document.querySelector("#accno").value;
        let pswd = document.querySelector("#pwd").value;
        let amount = document.querySelector("#amt").value;
        let data = Bank.getAccountDetails()
        let user = Bank.authenticateuser(accno,pswd)
        if(user==0){
            data[accno]["balance"]+=Number(amount)
          alert(data[accno]["balance"])
        }
        else if (user==1){
            alert("invalid password")
        }
        else{
            alert("invalid accno")
        }

}




}
