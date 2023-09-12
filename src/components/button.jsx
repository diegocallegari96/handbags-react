
function Button(props) {
    return (
        <button
            type="button"
            disabled={props.disable}
        >{props.labelText}
        </button>
    );
}

export default Button;