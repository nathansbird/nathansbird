import React, { useState } from "react";
import OptionList from "./OptionList";

const root = ["Developer", "Entreprenuer", "Creative"];
const paths = {
  branches: [
    {
      choices: ["TUVU App", "Byzantion NFT Marketplace", "GetDoctor"]
    },
    {
      choices: ["Dallas Film Club", "Collide Digital", "Klink Fundraising"]
    },
    {
      choices: ["Film Photography", "Social Media"]
    }
  ]
}

const LandingPage = () => {
  const [selectDepth, setSelectDepth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [optionTree, setOptionTree] = useState([root]);

  const extractNextPath = (index) => {
    // let nextPath = paths;

    // for(let i = 0; i <= index; i++){
    //   nextPath = nextPath.branches[i]
    // }

    // console.log('next path', nextPath);
  }

  return (
    <div className="landing-page">
      <div className="top-section" style={{transform: `translateX(-${offset}px)`}}>
        {optionTree.map((options, index) => {
          return (
            <OptionList options={options} depth={selectDepth - index} onSelect={(item, newOffset) => {
              setSelectDepth(index+1);
              setOffset(offset + newOffset);
              setOptionTree([...optionTree, paths.branches[item - 1].choices])
              extractNextPath(index + 1)
            }}/>
          )
        })}
      </div>
    </div>
  )
}

export default LandingPage;