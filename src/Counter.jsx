import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Counter = () => {
  const [timer, setTimer] = useState(0);
  const [run, setRun] = useState(false);
  let intervalId;
  useEffect(() => {
    if (run) {
      intervalId = setInterval(() => {
        setTimer((preTimer) => preTimer + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [run]);

  const StartStop = () => {
    setRun(!run);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Counter
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Counter
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => clearInterval(intervalId)}
              ></button>
            </div>
            <div className="modal-body">
              <p>{timer}</p>
            </div>
            <div className="modal-footer">
              <button
                onClick={StartStop}
                type="button"
                className="btn btn-danger"
              >
                Start/pause
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
