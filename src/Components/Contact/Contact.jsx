import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "adec07b1-661a-4c3b-9868-311b5e0a01b2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          fugiat, commodi, perferendis expedita ea consequuntur necessitatibus
          corporis ut architecto sequi accusamus asperiores? Delectus mollitia
          dicta molestiae autem quam voluptas maxime?
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@test.com</li>
          <li><img src={phone_icon} alt="" />+92 1234567890</li>
          <li><img src={location_icon} alt="" />66 Massachets Ave, Cambridge <br /> MA 03224, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <label >Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Your Mobile Number"
            required/>
            <label >Write Your Message Here</label>
            <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
