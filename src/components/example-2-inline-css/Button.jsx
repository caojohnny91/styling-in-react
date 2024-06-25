const Button = ({ buttonText }) => {
  const buttonStyle = {
    backgroundColor: '#b974b6',
    borderRadius: '8px',
    color: 'white',
    fontSize: '24pt',
    padding: '15px 50px',
    width: '300px',
  };
    return <button style={buttonStyle}>{buttonText}</button>;
  };

  
  export default Button;

// Benefits and pitfalls
// Inline styling in React is particularly useful for dynamic styling. Since styles are applied as JavaScript objects, you can easily modify styles based on the component’s state or props. This allows for more flexible and interactive styling that changes in response to user actions or other conditions within the application.

// As the application grows, managing styles inline can become cumbersome and less maintainable. This approach can lead to code duplication and difficulty in tracking style-related bugs.
  