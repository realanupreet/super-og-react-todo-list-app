import PropTypes from "prop-types";

const Person = (props) => {
  return (
    <div>
      <p>
        Hi, my name is {props.name} and I'm {props.age}yrs old
      </p>
    </div>
  );
};
export default Person;

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};
