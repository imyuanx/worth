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
import { useTranslation } from "react-i18next";

function Step2() {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);
    const [isShowNotComplete, setIsShowNotComplete] = useState(false);
    const [formData, setFormData] = useState({
        amount: "",
    });
    const { t, i18n } = useTranslation();

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
                        <div>{t('useLastData')}</div>
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
                        <div>{t('notCompleteTip')}</div>
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
            <ProgressBar className="affix-progress" percent={69} title={t('step2Tip')} />
            <p className="page-title">{t('step2Title')}</p>
            <FormItem label={t('step2FormAmount')}>
                <Input placeholder={t('step2FormAmountTip')} value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} />
            </FormItem>
            <Button onClick={() => {
                console.log(formData);
                if (!isComplete(formData)) {
                    setIsShowNotComplete(true);
                    return;
                }
                localStorage.setItem("isWorthBuy-step2-form-data", JSON.stringify(formData));
                navigate("/step3");
            }}>{t('step2FormBtn')}</Button>
        </div>
    );
}

export default Step2;
