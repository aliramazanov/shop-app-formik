import ConfettiButton from "../Confetti/ConfettiButton";
import Team from "./images/team.jpg";
import Work from "./images/work.jpg";
import Valley from "./images/valley.jpg";
import "./aboutpage.scss";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-header">
        Curious to Discover More About Us?
        <br /> <br />
        Experience Quick Fun: Click the Rocket!
      </div>
      <ConfettiButton text={"🚀🚀🚀"} />
      <p className="about-page-text">
        Welcome to our about page! We are a passionate team dedicated to find &
        curate amazing products and deliver them to you.
      </p>
      <p className="about-page-text">
        Feel free to explore our website and learn more about what we have to
        offer. If you have any questions or inquiries, don't hesitate to contact
        us.
      </p>
      <p className="about-page-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
        sapiente. Nam sequi impedit accusantium labore veniam quos ipsam
        inventore reiciendis ratione voluptatibus nulla deleniti dolore magni
        earum, voluptatum, eum pariatur.
      </p>
      <div className="about-image-wrapper">
        <img src={Team} alt="Team" />
        <img src={Work} alt="Work" />
        <img src={Valley} alt="Valley" />
      </div>
    </div>
  );
}
