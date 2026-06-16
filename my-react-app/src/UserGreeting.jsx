function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.name}</h2>
  );

  const loginPrompt = (
    <h2 className="login-prompt">Please login to continue</h2>
  );

  return props.isLogged ? welcomeMessage : loginPrompt;
}

export default UserGreeting;
