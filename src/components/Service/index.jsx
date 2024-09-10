import React from "react";
import Button from "../Button";
import Monitor from "../../assets/monitor.svg";
import ArrowRight from "../../assets/arrow.svg"; 

import "./style.scss";

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h5 className="services__subtitle">Our Services</h5>
                        <h2 className="services__title">Perfect and Fast Movement</h2>
                        <p className="services__description">We move with make a Creative
                            Strategy for help your business goal,
                            we help to improve your income by a services we have.
                            make your content look interesting and make people look for your business</p>
                        <a className="services__link" href="#">
                            <span>Read more</span>
                            <img src={ArrowRight} alt="arrow right" />
                        </a>
                    </div>
                    <div className="col-6 row">
                        <div className="col-6 services__item">
                            <div className="services__icon white">
                                <img src={Monitor} alt="Monitor" />
                            </div>
                            <h4 className="services__item-title">Social Media Management</h4>
                        </div>
                        <div className="col-6 services__item">
                            <div className="services__icon red">
                                <img src={Monitor} alt="Monitor" />
                            </div>
                            <h4 className="services__item-title">Search Engine Opimization</h4>
                        </div>
                        <div className="col-6 services__item">
                            <div className="services__icon green">
                                <img src={Monitor} alt="Monitor" />
                            </div>
                            <h4 className="services__item-title">Social Media Management</h4>
                        </div>
                        <div className="col-6 services__item">
                            <div className="services__icon yellow">
                                <img src={Monitor} alt="Monitor" />
                            </div>
                            <h4 className="services__item-title">Social Media Management</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;