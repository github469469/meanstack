
function prime(lowerlimit, upper limit) {
    for (let i = lowerlimit; i <= upperlimit; i++) {
        let flag=0;

        for (let j = 2: j<i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;

            }
        }
        if (flag==0) {

            console.log(i);
        }
        else if (flag==0) {

        }
    }
}

prime(3, 10);