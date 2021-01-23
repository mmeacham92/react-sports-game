const Header = ({ venue, resetGame, numResets }) => {
  return (
    <div className='header'>
      <h2>Welcome to</h2>
      <h1 className="banner">{venue}</h1>
      <button className="reset__button" onClick={resetGame}>
        Reset Game
      </button>
      <h4 className="hide num__resets">Number of resets: {numResets}</h4>
    </div>
  );
};

export default Header;
