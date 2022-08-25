import { Link } from "react-router-dom";

const Pagination = ({ contactsPerPage, totalContacts, paginate }) => {
  const pageNumbers = [];
// Loop through total post per page and push into array to get correct number of pages
  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='navbar justify-center'>
      <ul className='flex justify-center items-center flex-wrap '>
        {pageNumbers.map((number) => (
          <li key={number} className='btn btn-group m-1'>
            <Link to='#' className='btn btn-xs m-1'
                onClick={() => paginate(number)}
                 alt='paging'>
                {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
