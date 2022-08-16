import { useEffect, useState } from "react";
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

function Step3() {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);
    const [isShowNotComplete, setIsShowNotComplete] = useState(false);
    const [formData, setFormData] = useState({
        electronic: { price: "", quantity: "" },
        clothes: { price: "", quantity: "" },
        entertainment: { price: "", quantity: "" },
        necessities: { price: "", quantity: "" },
        foods: { price: "", quantity: "" },
    });
    const { t, i18n } = useTranslation();

    const onFinish = () => {
        console.log(formData);
        if (!isComplete(formData)) {
            setIsShowNotComplete(true);
            return;
        }
        localStorage.setItem(
            "isWorthBuy-step3-form-data",
            JSON.stringify(formData)
        );
        navigate("/result");
    };

    const useLastData = () => {
        const lastData = JSON.parse(
            localStorage.getItem("isWorthBuy-step3-form-data")
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
        const formData = localStorage.getItem("isWorthBuy-step3-form-data");
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
            <ProgressBar
                className="affix-progress"
                percent={100}
                title={t('step3Tip')}
            />
            <p className="page-title">
                {t('step3Title')}
            </p>
            <FormItem label={t('step3FormElectronic')}>
                <div className="form-item-children">
                    <Input
                        placeholder={t('step3FormElectronicTip')}
                        value={formData.electronic.price}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                electronic: {
                                    ...formData.electronic,
                                    price: e.target.value,
                                },
                            })
                        }
                    />
                    <Input
                        className="form-item-children-quantity"
                        placeholder={t('step3FormQuantityTip')}
                        value={formData.electronic.quantity}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                electronic: {
                                    ...formData.electronic,
                                    quantity: e.target.value,
                                },
                            })
                        }
                    />
                </div>
            </FormItem>
            <FormItem label={t('step3FormClothes')}>
                <div className="form-item-children">
                    <Input
                        placeholder={t('step3FormClothesTip')}
                        value={formData.clothes.price}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                clothes: {
                                    ...formData.clothes,
                                    price: e.target.value,
                                },
                            })
                        }
                    />
                    <Input
                        className="form-item-children-quantity"
                        placeholder={t('step3FormQuantityTip')}
                        value={formData.clothes.quantity}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                clothes: {
                                    ...formData.clothes,
                                    quantity: e.target.value,
                                },
                            })
                        }
                    />
                </div>
            </FormItem>
            <FormItem label={t('step3FormEntertainment')}>
                <div className="form-item-children">
                    <Input
                        placeholder={t('step3FormEntertainmentTip')}
                        value={formData.entertainment.price}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                entertainment: {
                                    ...formData.entertainment,
                                    price: e.target.value,
                                },
                            })
                        }
                    />
                    <Input
                        className="form-item-children-quantity"
                        placeholder={t('step3FormQuantityTip')}
                        value={formData.entertainment.quantity}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                entertainment: {
                                    ...formData.entertainment,
                                    quantity: e.target.value,
                                },
                            })
                        }
                    />
                </div>
            </FormItem>
            <FormItem label={t('step3FormNecessities')}>
                <div className="form-item-children">
                    <Input
                        placeholder={t('step3FormNecessitiesTip')}
                        value={formData.necessities.price}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                necessities: {
                                    ...formData.necessities,
                                    price: e.target.value,
                                },
                            })
                        }
                    />
                    <Input
                        className="form-item-children-quantity"
                        placeholder={t('step3FormQuantityTip')}
                        value={formData.necessities.quantity}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                necessities: {
                                    ...formData.necessities,
                                    quantity: e.target.value,
                                },
                            })
                        }
                    />
                </div>
            </FormItem>
            <FormItem label={t('step3FormFoods')}>
                <div className="form-item-children">
                    <Input
                        placeholder={t('step3FormFoodsTip')}
                        value={formData.foods.price}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                foods: {
                                    ...formData.foods,
                                    price: e.target.value,
                                },
                            })
                        }
                    />
                    <Input
                        className="form-item-children-quantity"
                        placeholder={t('step3FormQuantityTip')}
                        value={formData.foods.quantity}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                foods: {
                                    ...formData.foods,
                                    quantity: e.target.value,
                                },
                            })
                        }
                    />
                </div>
            </FormItem>
            <Button onClick={onFinish}>{t('step3FormBtn')}</Button>
        </div>
    );
}

export default Step3;
