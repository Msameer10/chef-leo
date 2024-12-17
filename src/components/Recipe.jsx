import ReactMarkdown from "react-markdown"

export default function Recipe(props) {
    return (
        <section className="container mt-5 recipe-container" aria-live="polite">
            <h3>Chef Leo Recommends:</h3>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}