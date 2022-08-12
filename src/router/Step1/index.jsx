import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProgressBar from "../../component/ProgressBar";
import "./index.css";
import Button from "../../component/Button";
import FormItem from "../../component/FormItem";
import Input from "../../component/Input";
import Select from "../../component/Select";
import category from "../../common/category.js";
import Message from "../../component/Message";
import cross from "../../assets/cross.svg";

function Step1() {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);
    const [formData, setFormData] = useState({
        goodsName: "",
        goodsType: Object.keys(category)[0],
        goodsPrice: "",
    });
    const closeMessage = () => {
        setIsShow(false);
    };

    return (
        <div className="step-page">
            {isShow && (
                <Message onClose={closeMessage} timing={2000}>
                    <div className="message-content">
                        <div>Please enter complete.</div>
                        <div className="message-icon-box">
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
            <ProgressBar
                className="affix-progress"
                percent={38}
                title={"1 / 3 Step1"}
            />
            <p className="page-title">What do you want to buy?</p>
            <FormItem label="Name of something">
                <Input
                    value={formData.goodsName}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setFormData({ ...formData, goodsName: e.target.value });
                    }}
                    placeholder="Example: T-shirt or camera"
                />
            </FormItem>
            <FormItem label="Type of something">
                <Select
                    defaultValue={Object.keys(category)[0]}
                    onChange={(e) => {
                        setFormData({ ...formData, goodsType: e.target.value });
                    }}
                >
                    {Object.keys(category).map((key) => {
                        const item = category[key];
                        return (
                            <option key={item.key} value={key}>
                                {key}
                            </option>
                        );
                    })}
                </Select>
            </FormItem>
            <FormItem label="Unit price">
                <Input
                    value={formData.goodsPrice}
                    onChange={(e) =>
                        setFormData({ ...formData, goodsPrice: e.target.value })
                    }
                    placeholder="$ Unit price"
                />
            </FormItem>
            <Button
                onClick={() => {
                    console.log(formData);
                    if (!Object.keys(formData).every((item) => formData[item])) {
                        setIsShow(true);
                        return;
                    }
                    localStorage.setItem(
                        "isWorthBuy-step1-form-data",
                        JSON.stringify(formData)
                    );
                    navigate("/step2");
                }}
            >
                Next
            </Button>
        </div>
    );
}

export default Step1;
