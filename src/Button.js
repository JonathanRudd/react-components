import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  checkVarationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(`You can't use more than one variation at a time.`);
    }
  },
};

export default Button;
