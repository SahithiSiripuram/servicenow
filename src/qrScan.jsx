
import { useParams } from "react-router-dom";

function QRScanner(){
  let {data} = useParams();
  console.log(data);
}

export default QRScanner;