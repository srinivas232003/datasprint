import Typed from 'react-typed';
import './type.css';

export default function Type() {
  return (
    <div className="typing-div">
      <h1>
        <Typed strings={["36 hours of creation","36 hours of fun","win exciting prizes!","enjoy!"]} typeSpeed={80} loop />
      </h1>
    </div>
  );
}