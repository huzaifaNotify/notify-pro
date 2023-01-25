import React from "react";

function SubmitButton(props) {
  return (
    <div className="text-center">
      <button type="submit" class="btn btn-dark">
        {props.title}
      </button>
    </div>
  );
}

export default SubmitButton;
