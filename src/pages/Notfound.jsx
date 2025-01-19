import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-10">
      <h1 className="text-4xl text-warning">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <p className="text-lg">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <Link
        to="/"
        className="btn btn-primary hover:bg-secondary hover:text-white"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
