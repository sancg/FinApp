import { useRouteError } from 'react-router-dom';

export default function ErrorHandler() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      Error inesperado
      <p>
        <i>{error?.statusText + ' - ' + error?.error?.message}</i>
      </p>
    </div>
  );
}
