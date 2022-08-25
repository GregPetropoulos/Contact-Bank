const Pagination = ({ contactsPerPage, totalContacts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='navbar justify-center'>
      <ul className='flex justify-center items-center flex-wrap '>
        {pageNumbers.map((number) => (
          <li key={number} className='btn btn-group m-1'>
            <a href='!#' alt='pagination'>
              <button
                className='btn btn-xs m-1'
                onClick={() => paginate(number)}>
                {number}
              </button>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
