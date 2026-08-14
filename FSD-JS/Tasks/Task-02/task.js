let a = 30;

while (a >= 1) {

    if (a === 10) {
        break;
    }

    if (a % 4 === 0) {
        a--;
        continue;
    }

    console.log(a);

    a--;
}