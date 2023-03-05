import React, { useEffect, useState } from "react";
import {QrReader} from "react-qr-reader";

function QRCodeScanner(props) {
  const [result, setResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  useEffect(() => {
    console.log(result)
  },[result])

  return (
    <div className='scanner'>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%", height: "300px" }}
      />
    </div>
  );
}

export default QRCodeScanner;
