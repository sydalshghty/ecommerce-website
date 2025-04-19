import ScaleLoader from "react-spinners/ScaleLoader";
import "../css/loading.css";

function Loading(){
    return(
        <div className="loading">
            <ScaleLoader color="#DB4444" width={6} height={40} radius={4}></ScaleLoader>
        </div>
    )
}
export default Loading;