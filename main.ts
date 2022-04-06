input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    servos.P1.setAngle(135)
    basic.pause(500)
    servos.P1.setAngle(45)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showString("Hola!")
    basic.showIcon(IconNames.Happy)
})
servos.P1.setAngle(45)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
}
