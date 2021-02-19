class bank {
    createAccount(acno, pname, minbal) {
        this.acno = acno;
        this.pname = pname;
        this.bal = minbal;
    }
    desposit(amount) {
        this.bal += amount;
        console.log("account credited with" + amount + "aval bal" + this.bal);
    }
    withdraw(amount) {
        if (amount > this.bal) {
            console.log("insufficient bal")
        }
        else {
            this.bal-=amount;
            console.log("account debited with" + amount + "aval bal" + this.bal);
        }
    }
    balanceEnq() {
        console.log(this.bal);
    }
}
var obj=new bank()
obj.createAccount(100, "akhi", 3000);
obj.desposit(10000);
obj.withdraw(6000);
obj.balanceEnq()








