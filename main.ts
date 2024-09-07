input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
})
