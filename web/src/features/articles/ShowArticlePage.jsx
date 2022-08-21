import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Helmet from 'react-helmet';

import { getArticleBySlug } from 'data/articles';
import RelativeDate from 'features/common/RelativeDate';


const Article = ({ article }) => (
    <article className="prose max-w-none">
        <header className="flex justify-between items-baseline">
            <h1>{article.title}</h1>
            <span className="text-slate-300">
                <RelativeDate date={article.date} />
            </span>
        </header>
        <main>
            <React.Suspense>
                <article.src />
            </React.Suspense>
        </main>
    </article>
);

const ShowArticlePage = () => {
    const { slug } = useParams();
    const article = getArticleBySlug(slug);

    return (
        <>
            <Helmet>
                <title>{article.title}</title>
            </Helmet>
            <div className="space-y-8">
                <Link to="/" className="text-sky-500">← Back to All Articles</Link>
                <Article article={article} />
            </div>
        </>
    );
};


export default ShowArticlePage;