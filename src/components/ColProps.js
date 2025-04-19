import "../css/ColProps.css";
function ColProps(props) {
    return (
        <div className="col-Props">
            <span></span>
            <p>{props.title}</p>
        </div>
    )
}
export default ColProps;