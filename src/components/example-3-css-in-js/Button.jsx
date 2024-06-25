import { createUseStyles } from 'react-jss';

const Button3 = ({ buttonText }) => {
  const styles = createUseStyles({
    btn: {
      backgroundColor: '#24292e', // adding the styles in the object that we'll apply to our button
      borderRadius: '8px',
      color: '#f7df1c',
      fontSize: '24pt',
      padding: '15px 50px',
      width: '300px',
    },
  });

  const classes = styles();
  
    return <button className={classes.btn}>{buttonText}</button>;
  };
  
  export default Button3;

  // Benefits and pitfalls
// CSS in JS, particularly with libraries like react-jss, allows for scoped styling where styles are applied at the component level, reducing the risk of conflicts and unintended side effects. Additionally, it leverages JavaScript’s power, enabling dynamic styling based on props, state, or any logic contained in your JavaScript.

// Implementing CSS in JS requires adding external libraries, like react-jss, which introduces additional dependencies to your project. This can increase the complexity of your setup and may impact performance due to the extra processing required to convert JavaScript styles into CSS.
  