const isComplete = (checkFormData) => {
    if (!checkFormData || typeof checkFormData !== "object") {
        return false;
    }
    return Object.keys(checkFormData).every((item) => {
        const fromItem = checkFormData[item];
        if (fromItem !== null && fromItem !== undefined && typeof fromItem == "object") {
            return isComplete(fromItem);
        }
        return fromItem;
    });
}

export default isComplete;