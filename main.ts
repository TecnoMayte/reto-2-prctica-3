input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 175) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        while (input.lightLevel() > 175) {
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.ForeverInBackground)
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
basic.showString("Pulsar A")
