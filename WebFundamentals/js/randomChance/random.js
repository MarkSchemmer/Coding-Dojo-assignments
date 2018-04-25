(function (){
        var c = (v) => console.log(v)
        amountOfCoins = Math.floor(Math.random(5)*20)
        var rand = function(q){
            winningNum = Math.floor(Math.random(1)*100)
            earnings = Math.floor(Math.random(50)*100)
            userInput = Math.floor(Math.random(1)*100)
            if(userInput == winningNum){
                q += earnings
                c(q + " You won!")
                return q
            }

            if(q <= 0){
                c("all coins spent")
                return 0
            }
            c(q)
            return rand(q-1)
        }
        rand(amountOfCoins)
    }())

