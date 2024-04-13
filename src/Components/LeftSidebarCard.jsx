import PropTypes from "prop-types";

export default function LeftSidebarCard(props) {
  return (
    <div>
      <div className='flex  items-center mb-6'>
        <img className='h-8 mr-2' src={props.icon} />
        <span className='text-xl'>{props.text}</span>
      </div>
    </div>
  );
}

LeftSidebarCard.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};
