function getEmoji(index) {
    if (index > 90) {
        return "🤩";
    } else if (index > 70) {
        return "😄";
    } else if (index > 50) {
        return "🙂";
    } else if (index > 25) {
        return "😣";
    } else {
        return "😭";
    }
}

function getTips(index) {
    if (index > 90) {
        return "Order now now now!";
    } else if (index > 70) {
        return "It's perfect for you.";
    } else if (index > 50) {
        return "emm, Think about it.";
    } else if (index > 25) {
        return "Are you sure?";
    } else {
        return "Maybe you need to see other things...";
    }
}

export { getEmoji };
export { getTips };
