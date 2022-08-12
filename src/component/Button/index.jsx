import "./index.css"

function Button(props) {
    const { className, children, onClick, ...otherProps } = props
    return <div className={`button ${!!className && className}`} onClick={onClick} {...otherProps}>
        {props.children}
    </div>
}

export default Button;
