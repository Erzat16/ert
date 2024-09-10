import React from "react";
import Button from "../Button";
import Poster from "../../assets/hero.png";
import Star from "../../assets/star.svg";
import Bill from "../../assets/bill.png";
import "./style.scss";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Make your dream
                        business goal come true
                    </h1>
                    <p className="hero__text">when you need us for improve your business,
                        then come with us to help your business have reach it, you just sit and feel that goal
                    </p>
                    <Button>Start project</Button>
                </div>
                <div className="hero__poster">
                    <img src={Poster} alt="Poster" />

                    <div className="hero__projects">
                        <div className="hero__star">
                            <img src={Star} alt="Star" />
                            <span>Great Project</span>
                        </div>
                        <span className="hero__done">800+ Done</span>
                    </div>
                    <div className="hero-review">
                        <div className="hero-review__author">
                            <img className="hero-review__avatar" src={Bill} alt="Bill" />
                            <div className="hero-review__info">
                                <h3 className="hero-review__name">Bill Adams</h3>
                                <span className="hero-review__position">CEO UpTech</span>
                            </div>
                        </div>
                        <p className="hero-review__description">“ This team is really the best in its field,
                            I don't regret working with them, and will come back again thanks “</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;