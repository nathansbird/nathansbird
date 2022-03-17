import React, { useState } from "react";

const OptionList = ({options, depth, onSelect}) => {
  const [mouse, setMouseTag] = useState("");
  const [selectDepth, setSelectDepth] = useState(0);
  const [width, setWidth] = useState();
  const transform = () => `translateY(-${((selectDepth || 1) - 1) * 37}px)`;

  return (
    <div className={`option-panel ${depth < 0 ? "hidden" : ""}`} style={{
      transform: transform(),
      width: width || 'unset'
    }}>
      {options.map((option, index) => {
        return (
          <p 
            className={`${!selectDepth ? (mouse ? mouse == option ? "active" : "inactive" : "") : ""} ${selectDepth ? selectDepth == (index + 1) ? "active" : "hidden" : ""}`} 
            onMouseEnter={() => setMouseTag(option)}
            onMouseLeave={() => setMouseTag("")}
            onClick={(e) => {
              setSelectDepth(index + 1)
              setWidth(e.target.getBoundingClientRect().width)
              setTimeout(() => {
                onSelect(index + 1, e.target.getBoundingClientRect().width)
              }, 200)
            }}
          >
            {`${option}${width && selectDepth == (index + 1) ? ' / ' : '    '}`}
          </p>
        )
      })}
      
      {/* <p
        className={`${!selectDepth ? (mouse ? mouse == "entrepreneur" ? "active" : "inactive" : "") : ""} ${selectDepth ? selectDepth == 2 ? "active" : "hidden" : ""}`} 
        onMouseEnter={() => setMouseTag("entrepreneur")}
        onMouseLeave={() => setMouseTag("")}
        onClick={() => {
          setSelectDepth(2)
          onSelect(2)
        }}
      >
        {options[1]}
      </p>
      <p 
        className={`${!selectDepth ? (mouse ? mouse == "creative" ? "active" : "inactive" : "") : ""} ${selectDepth ? selectDepth == 3 ? "active" : "hidden" : ""}`} 
        onMouseEnter={() => setMouseTag("creative")}
        onMouseLeave={() => setMouseTag("")}
        onClick={() => {
          setSelectDepth(3)
          onSelect(3)
        }}
      >
        {options[2]}
      </p> */}
    </div>
  )
}

export default OptionList;