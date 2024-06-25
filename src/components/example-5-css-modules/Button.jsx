import styles from "./button.module.css";
const Button5 = ({ buttonText }) => {
  return <button className={styles.btn}>{buttonText}</button>;
};

export default Button5;

// I like this way the best

// Benefits and pitfalls
// CSS Modules automatically ensure that all class names are local to the component, significantly reducing the risk of style conflicts. This scoping makes it easier to maintain styles across large projects, as you can be confident that changes in one component’s CSS won’t inadvertently impact other components.

// While CSS Modules are excellent for component-level styles, managing global styles can be more complex. Developers new to CSS Modules might find it challenging to understand how to apply global styles effectively. Additionally, since CSS Modules treat non-class selectors (like element and id selectors) as global, it requires careful planning to ensure these styles don’t unintentionally affect other parts of the application.

// CSS Modules offer a way to make CSS class names unique and specific to each component in your application. This helps avoid class name conflicts across your project.

// Here’s how CSS Modules differ from regular CSS:

// Filename Convention: CSS Module files are named with a .module.css extension. For example, instead of button.css, you would name it button.module.css.
// Import Syntax: Instead of the standard CSS import, CSS Modules are imported using a specific syntax that includes from.
// For example, you would use import styles from './button.module.css'.
// Scoped Class Selectors: Class selectors in a CSS Module are scoped to the component, meaning they won’t affect other elements outside the component. However, other types of selectors (like element selectors) in the CSS Module behave as global rules, similar to a regular stylesheet.
// By using CSS Modules, you ensure that the styles you define for one component don’t unintentionally impact other parts of your application.