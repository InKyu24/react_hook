import SecondComponent from "./SecondComponent";

function FirstComponent(props) {

    return (
        <div>
            <SecondComponent name={props.name} />
        </div>
    );
}

export default FirstComponent;