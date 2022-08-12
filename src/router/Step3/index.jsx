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
            <ProgressBar
                className="affix-progress"
                percent={100}
                title={"3 / 3 Step3 🎉"}
            />
            <p className="page-title">
                Provide details of your last month's bill
            </p>
            <FormItem label="Electronic products">
                <div className="form-item-children">
                    <Input
                        placeholder="$ Total cost"
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
                        placeholder="Quantity"
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
            <FormItem label="Clothes">
                <div className="form-item-children">
                    <Input
                        placeholder="$ Total cost"
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
                        placeholder="Quantity"
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
            <FormItem label="Entertainment">
                <div className="form-item-children">
                    <Input
                        placeholder="$ Total cost"
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
                        placeholder="Quantity"
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
            <FormItem label="Necessities">
                <div className="form-item-children">
                    <Input
                        placeholder="$ Total cost"
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
                        placeholder="Quantity"
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
            <FormItem label="Foods">
                <div className="form-item-children">
                    <Input
                        placeholder="$ Total cost"
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
                        placeholder="Quantity"
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
            <Button onClick={onFinish}>Finish</Button>
        </div>
    );
}

export default Step3;
