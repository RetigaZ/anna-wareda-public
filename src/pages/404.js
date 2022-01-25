import React from "react";

function error() {
  return (
    <div className="404">
      <h1>Niestety podstrona, której szukasz, jest aktualnie niedostepna!</h1>
      <a href="/home">Wróć na stronę główną</a>
    </div>
  );
}

export default error;
