import "./index.css"

function Input(props) {
    const { className, ...props_ } = props;
    return <input className={`input ${className}`} {...props_} />
}

export default Input