import nextId from "react-id-generator"
import drmartens17 from "../../../images/drmartens17.png"
import drmartens8 from "../../../images/drmartens8.png"
import drmartens13 from "../../../images/drmartens13.png"
import chevronDown from "../../../images/chevron-down.svg"
import chevronUp from "../../../images/chevron-up.svg"
import trash from "../../../images/can-trash.svg"

export const items = [
    {
        id: nextId(),
        image: drmartens17,
        title: "dr martens boots",
        price: "£199.99",
        chevronDown: chevronDown,
        chevronUp: chevronUp,
        trash: trash
    },
    {
        id: nextId(),
        image: drmartens8,
        title: "dr martens boots",
        price: "£199.99",
        chevronDown: chevronDown,
        chevronUp: chevronUp,
        trash: trash
    },
    {
        id: nextId(),
        image: drmartens13,
        title: "dr martens boots",
        price: "£199.99",
        chevronDown: chevronDown,
        chevronUp: chevronUp,
        trash: trash
    },
]