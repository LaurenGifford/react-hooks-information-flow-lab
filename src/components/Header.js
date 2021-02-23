function Header(props) {
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={props.onDarkModeClick}>
                {props.toggleDark ? "Light" : "Dark"} Mode
            </button>
        </header>
    )
}

export default Header