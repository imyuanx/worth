import { useEffect } from "react";
import "./index.css";

function Message(props) {
    const { title, children, timing, onClose } = props;
    useEffect(() => {
        if (!timing) {
            return () => {}
        }
        const handle = setTimeout(() => {
            onClose();
        }, timing);
        return () => {
            clearTimeout(handle);
        }
    }, []);
    return (
        <div className="message">
            {
                children ? children : <div className="message-content">{ title }</div>
            }
        </div>
    );
}

export default Message;
