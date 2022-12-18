import { useState, useEffect } from "react"
import "./App.css"

function App() {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playDrum(e.key.toUpperCase())
      handleChangeColor(e.key.toUpperCase())
    })
    // document.addEventListener("keyup", (e) => {
    //   handleChangeColor(e.key.toUpperCase())
    // })
  }, [])
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      handleChangeColor(e.key.toUpperCase())
    })
  }, [])
  const drumPads = [
    {
      padCode: "Q",
      keyCode: 81,
      padName: "Heater 1",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      isClicked: false,
    },
    {
      padCode: "W",
      keyCode: 87,
      padName: "Heater 2",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      isClicked: false,
    },
    {
      padCode: "E",
      keyCode: 69,
      padName: "Heater 3",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      isClicked: false,
    },
    {
      padCode: "A",
      keyCode: 65,
      padName: "Heater 4",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      isClicked: false,
    },
    {
      padCode: "S",
      keyCode: 83,
      padName: "Clap",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      isClicked: false,
    },
    {
      padCode: "D",
      keyCode: 68,
      padName: "Open HH",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      isClicked: false,
    },
    {
      padCode: "Z",
      keyCode: 90,
      padName: "Kick n' Hat",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      isClicked: false,
    },
    {
      padCode: "X",
      keyCode: 88,
      padName: "Kick",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      isClicked: false,
    },
    {
      padCode: "C",
      keyCode: 67,
      padName: "Closed HH",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      isClicked: false,
    },
  ]
  const [drum, setDrum] = useState(drumPads)
  const [padName, setPadName] = useState("")
  const [powerOn, setPowerOn] = useState(true)
  const handleChangeColor = (code) => {
    const clickedDrum = drum.find((drumPad) => drumPad.padCode === code)
    clickedDrum.isClicked = !clickedDrum.isClicked
    console.log(clickedDrum.isClicked)
    setDrum([...drum])
    setPadName(clickedDrum.padName)
  }
  const playDrum = (code) => {
    if (powerOn) {
      return document.getElementById(code).play()
    }
  }
  return (
    <div id="drum-machine">
      <h2>Drum Machine</h2>
      <div id="display">
        <div className="pads">
          {drum.map((drumPad) => (
            <button
              className={`drum-pad ${drumPad.isClicked ? "click-color" : ""}`}
              key={drumPad.padCode}
              id={drumPad.padName}
              onClick={() => playDrum(drumPad.padCode)}
              onMouseDown={() => handleChangeColor(drumPad.padCode)}
              onMouseUp={() => handleChangeColor(drumPad.padCode)}
            >
              {drumPad.padCode}
              <audio
                src={drumPad.audioSrc}
                className="clip"
                id={drumPad.padCode}
              />
            </button>
          ))}
        </div>
        <div className="adjust">
          <div>
            <p>Power</p>
            <div className="power-button">
              <div
                className={`button ${powerOn ? "right" : "left"}`}
                onClick={() => setPowerOn(!powerOn)}
              ></div>
            </div>
            <div className="pad-name">{padName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
