import styled from "styled-components";
const Button4 = ({ buttonText }) => {
  const StyledButton = styled.button`
    background-color: #86ba8a;
    border-radius: 8px;
    color: #3d3d3d;
    padding: 15px 50px;
    font-size: 24pt;
    width: 300px;
  `;
  return <StyledButton>{buttonText}</StyledButton>;
};

export default Button4;

  // Benefits and pitfalls
// Using styled-components, styles are tightly coupled with components, leading to more modular and reusable code. This method promotes the creation of self-contained components where both logic and style are defined together, enhancing code clarity and ease of maintenance. As far as libraries go, this one is among the most popular.

// For developers new to this approach, there can be a learning curve in understanding how to use JavaScript for styling. This method also potentially increases the complexity of the code, as it blends CSS with JavaScript, which might not be preferable for those who like to keep styling separate from scripting.
