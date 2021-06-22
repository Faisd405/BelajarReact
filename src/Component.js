import './App.css';

function Component() {
    return (
        <div className="Component">
            <Props name="Props" />
            <Props name="Sara" />
        </div>);
}

function Props(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default Component;
