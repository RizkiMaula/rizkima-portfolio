import { Link } from 'react-router';

// eslint-disable-next-line react/prop-types
const Card = ({
  img = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  title = 'Shoes!',
  description = 'If a dog chews shoes whose shoes does he choose?',
  directLink = '/hello',
  stacks = <></>,
  linkText = 'Visit Site',
}) => {
  return (
    <div className="shadow-xl card bg-base-100 hover:shadow-2xl ">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {stacks}
        <div className="justify-end card-actions">
          <Link
            to={directLink}
            target="_blank"
            className="btn btn-primary"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
