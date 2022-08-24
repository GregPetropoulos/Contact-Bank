

const Pagination = ({ contactsPerPage, totalContacts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='flex justify-between'>
        {pageNumbers.map((number) => (
          <li key={number} className='btn btn-group m-1'>
            <a to='!#' alt='pages' className=''>
              <button className='btn btn-xs m-1' onClick={() => paginate(number)}>
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
