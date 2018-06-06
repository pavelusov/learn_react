const Instructions = ({title, steps}) =>
    <section className="instructions">
        <h2>{title}</h2>
        {steps.map((step, key) =>
            <p key={key}>{step}</p>)}
    </section>;

export default Instructions;
