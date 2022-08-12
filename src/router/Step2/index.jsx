import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../component/ProgressBar";
import "./index.css";
import Button from "../../component/Button";
import FormItem from "../../component/FormItem";
import Input from "../../component/Input";
import Message from "../../component/Message";
import check from "../../assets/check.svg";
import cross from "../../assets/cross.svg";
import isComplete from "../../common/isComplete";

function Step2() {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);
    const [isShowNotComplete, setIsShowNotComplete] = useState(false);
    const [formData, setFormData] = useState({
        amount: "",
    });

    const useLastData = () => {
        const lastData = JSON.parse(
            localStorage.getItem("isWorthBuy-step2-form-data")
        );
        setFormData(lastData);
        setIsShow(false);
    };

    const closeMessage = () => {
        setIsShow(false);
    };

    const closeMessageNotComplete = () => {
        setIsShowNotComplete(false);
    };

    useEffect(() => {
        const formData = localStorage.getItem("isWorthBuy-step2-form-data");
        if(isComplete(JSON.parse(formData))) {
            if (formData) setIsShow(true);
        }
    }, []);

    return (
        <div className="step-page">
            {isShow && (
                <Message>
                    <div className="message-content">
                        <div>Use the last data?</div>
                        <div className="message-icon-box">
                            <img
                                className="message-icon"
                                src={check}
                                alt=""
                                onClick={useLastData}
                            />
                            <img
                                className="message-icon"
                                src={cross}
                                alt=""
                                onClick={closeMessage}
                            />
                        </div>
                    </div>
                </Message>
            )}
            {isShowNotComplete && (
                <Message>
                    <div className="message-content">
                        <div>Please enter complete.</div>
                        <div className="message-icon-box">
                            <img
                                className="message-icon"
                                src={cross}
                                alt=""
                                onClick={closeMessageNotComplete}
                            />
                        </div>
                    </div>
                </Message>
            )}
            <ProgressBar className="affix-progress" percent={69} title={"2 / 3 Step2"} />
            <p className="page-title">You need have some money...</p>
            <FormItem label="Monthly disposable amount:">
                <Input placeholder="$ amount" value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} />
            </FormItem>
            <Button onClick={() => {
                console.log(formData);
                if (!isComplete(formData)) {
                    setIsShowNotComplete(true);
                    return;
                }
                localStorage.setItem("isWorthBuy-step2-form-data", JSON.stringify(formData));
                navigate("/step3");
            }}>Next</Button>
        </div>
    );
}

export default Step2;
