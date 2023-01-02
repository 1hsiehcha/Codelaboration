import './background.css';
import '../../assets/Background.png';

const Background = (props) => {
    return (
  <div class="area">
    {props.children}
  </div>
    );
}

export default Background;