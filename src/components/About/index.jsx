import React from "react";
import "./style.scss";
import Button from "../Button";
import people from "../../assets/people.png";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h4 className="about__text">
                    About Us
                </h4>
                <h2 className="about__title">
                    Our Teammate
                </h2>
                <div className="about__row">
                    <div className="about__content">
                        <div className="about__img">
                            <img src={people} alt="" />
                        </div>
                    </div>
                    <div className="about__description">
                        <p className="about__one">We move with make a Creative Strategy for help your business goal,
                            we help to improve your income by a services we have.
                            make your content look interesting and make people look for your business
                        </p>
                        <p className="about__two">We move with make a Creative Strategy for help your business goal,
                            we help to improve your income by a services we have.
                            make your content look interesting and make people look for your business
                        </p>
                        <div className="about__button">
                            <Button className="">About Us</Button>
                            <Button className="outline about__circle">Our Story</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;