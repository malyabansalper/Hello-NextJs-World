import React from "react";
import { useRouter } from "next/router";

export default function Jumbotron() {
  const router = useRouter();
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h1 className="display-4">Healthy Fruits</h1>
        <p className="lead">
          Find your best health partner today! Adopt wonderful new habit.
        </p>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => router.push("/fruits")}
        >
          Start Searching
        </button>
      </div>
    </div>
  );
}
