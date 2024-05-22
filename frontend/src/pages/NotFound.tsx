import { Link } from 'react-router-dom';
// import { LinkIcon } from '@heroicons/react/20/solid';
import ErrorHandler from '../components/ErrorHandler';

export default function NotFound() {
  return (
    <>
      <p className="text-center text-xl">
        Pagina no encontrada{' '}
        <span className="text-red-800 font-semibold">
          <Link to="/">
            Regresar a Inicio
            {/* <LinkIcon className="w-5 inline-block" /> */}
          </Link>
        </span>
      </p>
      <ErrorHandler />
    </>
  );
}
