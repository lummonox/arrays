function game_over () {
    basic.showString("try again")
    new_game()
}
input.onButtonPressed(Button.A, function () {
    checkbuttonpress("L")
})
function AddRandomToEnd () {
    index = 0
    if (randint(0, 1) == 0) {
        petternlist.push("L")
    } else {
        petternlist.push("R")
    }
}
input.onButtonPressed(Button.B, function () {
    checkbuttonpress("R")
})
function checkbuttonpress (letter: string) {
    if (petternlist[index] == letter) {
        index += 1
        if (index == petternlist.length) {
            basic.showIcon(IconNames.Yes)
            AddRandomToEnd()
            ShowPattern()
        }
    } else {
        game_over()
    }
}
function ShowPattern () {
    for (let value of petternlist) {
        if (value == "L") {
            basic.showLeds(`
                . . . . .
                . # . . .
                # # # # #
                . # . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . # .
                # # # # #
                . . . # .
                . . . . .
                `)
        }
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
    basic.clearScreen()
}
function new_game () {
    petternlist = []
    AddRandomToEnd()
    ShowPattern()
}
let petternlist: string[] = []
let index = 0
new_game()
