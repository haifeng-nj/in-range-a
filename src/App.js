import React from "react";
import "sanitize.css";
import "./styles.scss";
import InputRange from "react-input-range";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";

// docs:
// - https://material-ui.com/api/slider/#css
// - https://material-ui.com/styles/advanced/#makestyles-withstyles-styled
const useStyles = makeStyles(
  {
    track: {
      color: "#8f23b3",
      height: "3px",
      borderRadius: "3px"
    },
    rail: {
      opacity: 1,
      backgroundColor: "#e6e9ea",
      height: "3px",
      borderRadius: "3px"
    },
    thumb: {
      color: "white",
      width: "1rem",
      height: "1rem",
      marginTop: "-6px",
      border: "2px solid #8f23b3",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.09)",
      "&$focusVisible,&:hover": {
        boxShadow: "0 0 0 8px rgba(155, 38, 182, 0.2)"
      },
      "&$active": {
        boxShadow: "0 0 0 14px rgba(155, 38, 182, 0.2)"
      }
    },
    // don't remove the following lines
    focusVisible: {},
    active: {}
  },
  { name: "MuiSlider" }
);

export default function App() {
  const [val, setVal] = React.useState({ min: 0, max: 100 });

  const [val2, setVal2] = React.useState([0, 100]);

  const classes = useStyles();

  return (
    <div className="App" style={{ maxWidth: "100vw", padding: "0 10vw" }}>
      <h1>Range inputs</h1>

      <div>
        <div>
          <Slider
            //disabled
            classes={classes}
            step={5}
            min={0}
            max={100}
            value={val2}
            onChange={(ev, v) => setVal2(v)}
            onChangeCommitted={(ev, v) => console.log(v)}
            valueLabelDisplay="off"
            aria-labelledby="range-slider"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1rem 0",
            fontWeight: 500,
            color: "#8f23b3"
          }}
        >
          <div>{`€${val2[0]}`}</div>
          <div>{`€${val2[1]}`}</div>
        </div>
        <div>
          <InputRange
            step={5}
            formatLabel={value => null}
            draggableTrack={false}
            allowSameValues={false}
            maxValue={100}
            minValue={0}
            value={val}
            onChange={setVal}
            onChangeComplete={args => console.log(args)}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
            fontWeight: 500,
            color: "#8f23b3"
          }}
        >
          <div>{`€${val.min}`}</div>
          <div>{`€${val.max}`}</div>
        </div>
      </div>
    </div>
  );
}
