basic.forever(function () {
    maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDLeft)
    maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDRight)
    maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDLeft)
    maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDRight)
    basic.pause(100)
})
basic.forever(function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        while (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            basic.pause(600)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(600)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(700)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(600)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(700)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
            basic.pause(600)
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
