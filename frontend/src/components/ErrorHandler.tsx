import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorHandler() {
  // ref:: https://stackoverflow.com/questions/75944820/whats-the-correct-type-for-error-in-userouteerror-from-react-router-dom
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  return (
    <div>
      Error inesperado
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
