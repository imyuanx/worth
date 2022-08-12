import "./index.css";

function ProgressBar(props) {
    const { percent, title } = props;

    return (
        <div className="progress-bar-box">
            <div
                className="progress-bar"
                style={{
                    width: `${percent}%`,
                }}
            ></div>
            <div className="step-title">{title}</div>
        </div>
    );
}

export default ProgressBar;
