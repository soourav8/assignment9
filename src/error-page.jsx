import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{textAlign: "center", fontWeight: 800, marginTop:"200px"}} id="error-page">
      <h1>Oops!</h1>
      <h2 style={{color:"red", fontSize: "80px"}}>404!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}