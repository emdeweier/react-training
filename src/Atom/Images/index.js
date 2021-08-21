let Image = (props) => {
    return (
        <img alt={props.alt} src={props.url} width={props.width} height={props.height} className={props.class} />
    )
}

export default Image;