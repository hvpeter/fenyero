let fényerő = 0
loops.everyInterval(500, function () {
    fényerő = 50
    for (let sor = 0; sor <= 4; sor++) {
        for (let oszlop = 0; oszlop <= 4; oszlop++) {
            led.setBrightness(fényerő)
            led.plot(oszlop, sor)
        }
        basic.pause(300)
        fényerő += 70
    }
    basic.clearScreen()
})
