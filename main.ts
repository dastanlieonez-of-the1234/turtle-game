radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        turtle.turnLeft()
    }
    if (receivedNumber == 2) {
        turtle.turnRight()
    }
})
input.onButtonPressed(Button.A, function () {
    turtle.back(1)
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    turtle.pen(TurtlePenMode.Up)
    radio.sendNumber(6)
})
input.onButtonPressed(Button.B, function () {
    turtle.forward(1)
    radio.sendNumber(3)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    turtle.pen(TurtlePenMode.Down)
    radio.sendNumber(5)
})
basic.forever(function () {
    radio.setGroup(128)
})
