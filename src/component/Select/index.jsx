import "./index.css";
import selectIcon from "../../assets/select.svg";

function Select(props) {
    const { children, ...props_ } = props;
    return (
        <div className="select-box">
            <select className="select" {...props_}>
                {children}
            </select>
            <img className="select-icon" src={selectIcon} alt="" />
        </div>
    );
}

export default Select;
