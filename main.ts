input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (已初始化 == 1) {
        小车启停状态切换()
    }
})
function 小车停止状态 () {
    if (已初始化 == 1) {
        停止 = 1
        mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Red)
        basic.showIcon(IconNames.Sad)
        music.play(music.stringPlayable("C5 A B G A F G E ", 500), music.PlaybackMode.UntilDone)
        control.reset()
    }
}
function 小车启停状态切换 () {
    if (停止 == 0) {
        小车停止状态()
    } else {
        小车启动状态()
    }
}
input.onSound(DetectedSound.Loud, function () {
    if (已初始化 == 1) {
        小车启停状态切换()
    }
})
function 小车启动状态 () {
    停止 = 0
    mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Green)
    basic.showIcon(IconNames.Happy)
    mbit_小车类.Music_Car(mbit_小车类.enMusic.power_up)
}
let 已初始化 = 0
let 停止 = 0
input.setSoundThreshold(SoundThreshold.Loud, 170)
mbit_小车类.RGB_Car_Big2(mbit_小车类.enColor.Red)
basic.showIcon(IconNames.Sad)
停止 = 1
已初始化 = 1
basic.forever(function () {
    if (停止 == 0) {
        if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.White) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.White)) {
            mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Run, 50)
        } else if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.White) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.Black)) {
            mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinRight, 30)
        } else if (mbit_小车类.Line_Sensor(mbit_小车类.enPos.LeftState, mbit_小车类.enLineState.Black) && mbit_小车类.Line_Sensor(mbit_小车类.enPos.RightState, mbit_小车类.enLineState.White)) {
            mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinLeft, 30)
        } else {
            mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Run, 50)
        }
    } else {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    }
})
