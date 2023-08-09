import { useContext } from "react";
import { DataContext } from "./DataContext";

function SecondComponent({ name, setName }) {
    const msg = useContext(DataContext);

    return (
        <div>
            <p>SecondComponent - {msg}</p>
            <p>SecondComponent - {name}</p>
        </div>
    );
}

export default SecondComponent;