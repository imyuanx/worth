import "./index.css"

function FormItem(props) {
    const { className, label, children } = props;
    return <div className={`form-item ${!!className && className}`}>
        <label className="form-item-label">{ label }</label>
        { children }
    </div>
}

export default FormItem