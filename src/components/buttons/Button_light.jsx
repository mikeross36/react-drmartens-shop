import React from "react"
import arrowRight from "../../images/arrow-right.svg"

const ButtonLight = () => {
    return (
        <button className="button-light">
            Add to cart <img src={arrowRight} alt="arrow right icon" width="20px" height="20px"></img>
        </button>
    )
}

export default ButtonLight;