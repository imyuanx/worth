import { useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import translate from "../../assets/translate.svg";
import github from "../../assets/github.svg";
import "./index.css";
import { useEffect, useState } from "react";
import { useTranslation, Trans } from 'react-i18next';

function Home() {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toStep = () => {
        navigate("/step1");
    };

    const selectLanguage = () => {
        setOpen(true);
    };

    const toLocal = (tag) => {
        setOpen(false);
        tag && i18n.changeLanguage(tag);
    };

    return (
        <div className="home">
            {isOpen && (
                <div className="translate-menu">
                    <div className="menu-item" onClick={(_) => toLocal("en")}>
                        English
                    </div>
                    <div className="menu-item" onClick={(_) => toLocal("zh")}>
                        中文
                    </div>
                </div>
            )}
            <div className="title">
                <div>Worth</div>
                <div className="icon-group">
                    <img
                        onClick={() => {
                            selectLanguage();
                        }}
                        src={translate}
                        className="translate-icon"
                        alt="logo"
                    />
                    <img onClick={() => { window.open("https://www.github.com/yunying1/worth") }} src={github} className="github-icon" alt="logo" />
                </div>
            </div>
            <div className="container">
                <div className="home-header">
                    <div className="icon-box">
                        <div className="car-box-box">
                            <div className="car-box">
                                <div className="car">🛒</div>
                            </div>
                        </div>
                    </div>
                    <div className="introduction">
                        <p>{ t('homeText1') }</p>
                        <div className="home-text-2-box">
                            <div className="home-text-2"><span>{t('homeText2_1')}</span></div>
                            <div className="home-text-2"><span className="home-text-2-primary">{t('homeText2_2')}</span></div>
                            <div className="home-text-2"><span>{t('homeText2_3')}</span></div>
                        </div>
                    </div>
                </div>
                <Button className="try-btn" onClick={toStep}>
                    { t('homeBtn') }
                </Button>
            </div>
        </div>
    );
}

export default Home;
