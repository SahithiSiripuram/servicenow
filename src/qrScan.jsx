
import { useParams } from "react-router-dom";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import {getDatabase, ref, set, onValue} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBTO5B8gmKFpQRjuyDJqxDfe8P2qlJ_tr4",
  authDomain: "servicenowstudentday-47da9.firebaseapp.com",
  databaseURL: "https://servicenowstudentday-47da9-default-rtdb.firebaseio.com",
  projectId: "servicenowstudentday-47da9",
  storageBucket: "servicenowstudentday-47da9.appspot.com",
  messagingSenderId: "1039133673410",
  appId: "1:1039133673410:web:437aaf981e1b6f1724385b"
};

const app = initializeApp(firebaseConfig);

function QRScanner(){
  let {data} = useParams();
  const[message,setMessage]  = useState();

  function markAttendance(data){  
    const db = getDatabase();
    const attendeeRef = ref(db, 'attendance/'+ data);
  
    onValue(attendeeRef,(snapshot)=>{
      const rollNo = snapshot.val();
  
      if(rollNo === null){
        setMessage(data+" is not invited for the event");
      }
      else if(rollNo.attendance === "present"){
        setMessage("Attendance is already marked for "+data);
      }
      else if(rollNo.attendance == "absent"){
        set(attendeeRef, {
          attendance: "present"
        });
        setMessage("Attendance is marked for "+data);
      }
      else{
        setMessage("Unknown Error")
      }
    })
  }

  return(
    <div className="App">
      <center>
        <h2>Servicenow Student Day</h2>
        <h5>Roll Number: {data}</h5>
        <button onClick = {() => markAttendance(data)}>Mark Attendance</button>
        <h4>{message}</h4>
      </center>
    </div>
  )
}

export default QRScanner;