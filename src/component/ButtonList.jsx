import React from "react";
import Button from "./Button";

function ButtonList() {
  const buttonData = ['BTS','TMKOC','Music','Apple','Java','Computer Programming','F.I.R.','Live','Bitcoin'];
  return (
    <div className="mb-5">
      {
        buttonData.map((item,index)=><Button key={index} title={item} />)
      }
    </div>
  );
}

export default ButtonList;
