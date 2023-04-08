import React from "react";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();

  const gotomain = () => {
    navigate("/");
  };

  return (
    <div>
      <button
        style={{
          marginTop: 100,
          marginLeft: 20,
          height: 50,
          width: 200,
          fontSize: 30,
          borderRadius: 20
        }}
        onClick={gotomain}
      >
        로그아웃
      </button>
    </div>
  );
}