import { useNavigate, useRouteError } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const errer = useRouteError();

  console.log(errer)

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errer.data}</p>
      <p>{errer.massage}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
