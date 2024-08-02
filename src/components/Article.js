import React from "react";

function Article({ title, date, preview, minutes }) {
    function emojis(minutes) {
        const interval = minutes < 30 ? 5 : 10;
        const emoji = minutes < 30 ? "☕️" : "🍱";
        let emojis = "";

        for (let i = 0; i < minutes; i += interval) {
            emojis += emoji;
        }
        return emojis;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date ? date : "January 1, 1970"}
                {emojis(minutes)}
                {minutes} min read;
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;