import Typed from 'react-typed';
import './type.css';

export default function Type(props) {
  return (
    <div className="typing-div">
      <h1>
        <Typed strings={props.dt} typeSpeed={80} loop />
      </h1>
    </div>
  );
}