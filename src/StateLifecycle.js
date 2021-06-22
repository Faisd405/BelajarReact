function StateLifecycle() {
    return (
        <div>
            <StateLifecycle1 date={new Date()} />
        </div>
    );
}

function StateLifecycle1(props) {
    return (
        <div>
            <h1>Hello, Clock!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

setInterval(StateLifecycle, 1000);

export default StateLifecycle;
