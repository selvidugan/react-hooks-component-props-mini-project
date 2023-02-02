import React from "react";
import Article from "./Article";

function ArticleList({ articleItems }) {
    const allArticles = articleItems.map((article) => (
        <Article
            key={article.id}
            title={article.title}
            date={article.date}
            preview={article.preview}
            minutes={article.minutes}
        />
    ))

    return (
        <main>
            {allArticles}
        </main>);
}

export default ArticleList;