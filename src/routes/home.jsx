import { useState } from "react";
import Title from "../components/Title";
import "./Home.css";
import Switch from "@mui/material/Switch";
import PlayButton from "../components/PlayButton";

export default function Home() {
  const [hardMode, setHardMode] = useState(false);

  const toggleHardMode = () => {
    setHardMode(!hardMode);
  };

  return (
    <div className='background-container'>
      <Title
        headerHeight='180px'
        textSize='60px'
        hasRules={true}
        titleText={"Wordle"}
      />
      <div className='gif-container'>
        <img
          className='gameplay-gif'
          src='src/resources/gameplay.gif'
          width={"350px"}
        />
      </div>
      <div className='play-button-and-toggle-container'>
        <PlayButton
          func={function () {
            location.href = `/game/${hardMode ? "hard" : "normal"}`;
          }}
          text='Start Game'
          isStartButton={true}
        />
        <div className='switch-outer-container'>
          <div className={`switch-label ${hardMode ? "" : "greyed-out"}`}>
            Hard Mode
          </div>
          <div className='switch-container'>
            <Switch
              checked={hardMode}
              onChange={toggleHardMode}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
