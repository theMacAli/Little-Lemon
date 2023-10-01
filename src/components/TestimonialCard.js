
import './TestimonialCard.css';


const TestimonialCard = ({ customer }) => {
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <span>
        
      </span>
      <blockquote><p>"{customer.says}"</p></blockquote>
    </article>
  );
};

export default TestimonialCard;
