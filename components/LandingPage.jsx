import React, { useState } from "react";

const LandingPage = () => {
  const [mouse, setMouseTag] = useState("");

  return (
    <div className="landing-page">
      <div className="top-section">
        <div className="content-center">
          <p 
            className={mouse && mouse != "developer" ? "inactive" : ""} 
            onMouseEnter={() => setMouseTag("developer")}
            onMouseLeave={() => setMouseTag("")}
          >
            developer
          </p>
          <p
            className={mouse && mouse != "entrepreneur" ? "inactive" : ""}
            onMouseEnter={() => setMouseTag("entrepreneur")}
            onMouseLeave={() => setMouseTag("")}
          >
            entrepreneur
          </p>
          <p 
            className={mouse && mouse != "creative" ? "inactive" : ""}
            onMouseEnter={() => setMouseTag("creative")}
            onMouseLeave={() => setMouseTag("")}
          >
            creative
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;