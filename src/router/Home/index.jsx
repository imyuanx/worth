import { useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import translate from "../../assets/translate.svg";
import github from "../../assets/github.svg";
import "./index.css";
import { useState } from "react";

function Home() {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    const toStep = () => {
        navigate("/step1");
    };

    const selectLanguage = () => {
        setOpen(true);
    };

    // TODO: translate
    const toLocal = (tag) => {
        setOpen(false);

        if (tag == "en") {
            navigate("/");
        } else {
            navigate("/");
        }
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
                    {/* <img
                        onClick={() => {
                            selectLanguage();
                        }}
                        src={translate}
                        className="translate-icon"
                        alt="logo"
                    /> */}
                    <img onClick={() => { window.open("https://www.github.com/yunying1") }} src={github} className="github-icon" alt="logo" />
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
                        <p>Enter the item you want to buy,</p>
                        <p>
                            <span className="primary">Recommend index</span> to
                            you according to your bill.
                        </p>
                    </div>
                </div>
                <Button className="try-btn" onClick={toStep}>
                    Try now
                </Button>
            </div>
        </div>
    );
}

export default Home;
