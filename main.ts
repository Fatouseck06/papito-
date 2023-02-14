let Pepito = 0
input.onGesture(Gesture.Shake, function () {
    Pepito = randint(1, 6)
    if (6 == Pepito) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    } else if (5 == Pepito) {
        basic.showLeds(`
            # . . . #
            . . . . #
            . . # . .
            . . . . .
            # . . . #
            `)
    } else if (4 == Pepito) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (3 == Pepito) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (2 == Pepito) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (1 == Pepito) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
