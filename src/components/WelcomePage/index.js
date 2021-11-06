const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <p> Welcome {user} </p>
      <button onClick={HandleLogout}>Logout</button>
    </>
  );
};
export default WelcomePage;
