import React from "react"
import { collections } from "./data";
import Button from "../buttons/Button";

const Collection = () => {
    return (
        <main className="main">
            <section className="collection section">
                <div className="collection__container grid">
                    {collections.map(collection => {
                        const { id, name, description, image } = collection;
                        return (
                            <div key={id} className="collection__card">
                                <div className="collection__data">
                                    <h3 className="collection__name">{name}</h3>
                                    <p className="collection__description">{description}</p>
                                    <Button />
                                </div>
                                <img src={image} alt="collection" className="collection__img"/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Collection;