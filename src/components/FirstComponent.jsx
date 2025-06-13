import Events from "./Events";

const FirstComponent = () => {
    let titulo = 'teste'
    return (
        <div>
            <h1>{titulo}</h1>
            <Events/>
        </div>
    );
};

export default FirstComponent;