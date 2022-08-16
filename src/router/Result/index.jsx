import React, { useCallback, useRef, useState } from "react";
import { useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useNavigate } from "react-router-dom";
import "./index.css";
import getRecommendIndex from "../../common/getRecommendIndex";
import { getEmoji, getTips } from "../../common/getResultByIndex";
import { useTranslation } from "react-i18next";

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
};

function Result() {
    const refAnimationInstance = useRef(null);

    const navigate = useNavigate();
    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
            refAnimationInstance.current({
                ...opts,
                origin: { y: -1 },
                angle: 270,
                particleCount: Math.floor(200 * particleRatio),
            });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        makeShot(0.2, {
            spread: 60,
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, [makeShot]);

    const [recommendedIndex, setRecommendedIndex] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        let goodsInfo = JSON.parse(localStorage.getItem("isWorthBuy-step1-form-data"));
        let monthlyAmount = JSON.parse(localStorage.getItem("isWorthBuy-step2-form-data"));
        let billInfo = JSON.parse(localStorage.getItem("isWorthBuy-step3-form-data"));
        const goodsType = goodsInfo?.goodsType;
        const goodsPrice = goodsInfo?.goodsPrice;
        const cateTotalPrice = billInfo[goodsType]?.price;
        const cateTotalPriceAverage = billInfo[goodsType]?.price / billInfo[goodsType]?.quantity;
        const monthlyAmount_ = monthlyAmount.amount;
        const recommendedIndex = getRecommendIndex(goodsPrice, cateTotalPriceAverage, cateTotalPrice, monthlyAmount_, goodsType);
        if (recommendedIndex > 50) fire();
        setRecommendedIndex(recommendedIndex);
    }, []);

    const toHome = () => {
        navigate("/");
    }

    return (
        <div className="step-page">
            <ReactCanvasConfetti
                refConfetti={getInstance}
                style={canvasStyles}
            />
            <div className="container">
                <div className="header">
                    <span>{getEmoji(recommendedIndex) + " " + recommendedIndex}</span>
                </div>
                <div className="result">{ t(getTips(recommendedIndex)) }</div>
                <div className="footer" onClick={toHome}>{t('BackToHome')}</div>
            </div>
        </div>
    );
}

export default Result;
