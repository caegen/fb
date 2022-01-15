function counter(start, end) {
    for (let number=start; number <= end; number++){
        let print = "";
        if( number % 3 === 0 ){
            print += "Fizz"
        }
        if( number % 5 === 0 ){
            print += "Buzz"
        }
        else {
            print = number;
        }
        console.log(print)
    }
}

counter(1, 100);