import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Header, ButtonStyled, InputStyled } from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';

const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = e => {
    setSearchName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchName) {
      return toast.info('Please, enter a search name');
    }

    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
          value={searchName}
          onChange={handleChange}
        />
        <ButtonStyled type="submit">
          <span style={{ marginRight: '10px' }}>Search </span>
          <span>
            <BiSearchAlt />
          </span>
        </ButtonStyled>
      </form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;