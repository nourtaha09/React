import "./styles.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
function App() {
  const [dataNumber, setDataNumber] = useState(0);
  const [trueNumber, setTrueNumber] = useState(0);
  const [falseNumber, setFalseNumber] = useState(0);
  const data = [
    {
      name: "monkey",
      img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    },
    {
      name: "horse",
      img: " https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "lion",
      img: "https://media.istockphoto.com/photos/male-lion-resting-on-a-rock-picture-id1333977253?b=1&k=20&m=1333977253&s=170667a&w=0&h=q_EqYl_GqFCR1XmF_AK91YRFDapwAClOoc2fZbsnmr4=",
    },
    {
      name: "fish",
      img: " https://thumbs.dreamstime.com/z/carp-fish-isolated-side-view-126240695.jpg",
    },
    {
      name: "bird",
      img: "https://media.istockphoto.com/photos/lilac-breasted-roller-in-kenya-africa-picture-id1191223442?b=1&k=20&m=1191223442&s=170667a&w=0&h=QwcAZJp4cbIBT2dNEQV_MH7tVzzBN6SwBIY8e5TzxlA=",
    },
  ];
  useEffect(() => {
    if (dataNumber === data.length - 1) {
      setDataNumber(0);
    }
  }, [dataNumber]);
  return (
    <div className="App">
      <div className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://openmoji.org/data/color/svg/1F625.svg" />
          <p>{trueNumber}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://openmoji.org/data/color/svg/1F600.svg" />
          <p>{falseNumber}</p>
        </div>
      </div>
      <div className="main__div">
        <div className="data">
          <img src={data[dataNumber].img} />
          <p>{data[dataNumber].name} </p>
        </div>
        <div className="rigthOrWrong header">
          <img
            onClick={() => {
              setDataNumber((pre) => pre + 1);
              setTrueNumber((pre) => pre + 1);
            }}
            src="https://icon-library.com/images/false-icon/false-icon-3.jpg"
          />
          <BsFillCheckCircleFill
            style={{ fontSize: "60px" }}
            onClick={() => {
              setDataNumber((pre) => pre + 1);
              setFalseNumber((pre) => pre + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
