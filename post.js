import React from "react"
import TemplateConfig from "./_templateConfig";

const PostTemplate = (props) => {
    let title = props.post.title;
    props.post.metas.tags.forEach(o => {
        if (TemplateConfig.titleTags.includes(o)) {
            title = "[" + o + "] " + title;
        }
    });
    return (
        <main role="main-inner-wrapper" className="container">
            <div className="blog-details">
                <article className="post-details" id="post-details">
                    <header role="bog-header" className="bog-header text-center">
                        <h3>{props.post.metas.date}</h3>
                        <h2> {title}</h2>
                    </header>
                    <figure>
                        <img src={props.post.metas.coverimage} alt="" className="img-responsive" />
                    </figure>
                    <div className="enter-content">
                        {props.content}
                    </div>
                </article>
                <div className="entry__taxonomies">
                    <div className="entry__cat">
                        <h5>Posted In: </h5>
                        {props.post.metas.categories.map((category, index) => {
                            return (
                                <span className="entry__tax-list" key={index}>
                                    <a href={"/posts/categories/" + category+"?pagetype=search"}>{category.toUpperCase()}</a>
                                </span>
                            );
                        })}
                    </div>

                    <div className="entry__tags">
                        <h5>Tags: </h5>
                        <span className="entry__tax-list entry__tax-list--pill">
                            {props.post.metas.tags.map((tag, index) => {
                                return (
                                    <a key={index} href={"/?pagetype=search&tags=" + tag}>
                                        {tag}
                                    </a>
                                );
                            })}
                        </span>
                    </div>
                </div>
                {props.disqus}
            </div>
        </main>

    )
}


export default PostTemplate