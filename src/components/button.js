const Button = ( {onClick, color, children, disabled} ) => {

    const style = {
        backgroundColor: disabled ? 'gray' : color,
        color: 'white'
    }

return (<button disabled={disabled} onClick={onClick} style={style}>{children}</button>)

}

export default Button;