// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
runkit.setSpeedRatio(50)
basic.forever(function () {
    runkit.moveForward(500)
    runkit.rotateCw(500)
})
