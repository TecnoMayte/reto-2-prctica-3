input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 175) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        while (input.lightLevel() > 175) {
            music.playSoundEffect(music.createSoundEffect(
            WaveShape.Sine,
            3065,
            3589,
            255,
            144,
            162,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), SoundExpressionPlayMode.InBackground)
            basic.showIcon(IconNames.Sad)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
basic.forever(function () {
	
})
