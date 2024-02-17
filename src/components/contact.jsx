import { Block, BlockHeader, Icon, Link } from "framework7-react";

const Contact = () => {
  const onClick = () => {
    location = "mailto:";
  };

  return (
    <Block className="contact">
      <div className="description">
        You can find me on socail media like Instagram or Twitter, and also can
        get more detail about my project on Youtube.
        <Icon icon="top-right" size={24} />
      </div>
      <div className="email">
        Contact me by email:{" "}
        <span className="email-address">licanccc@gmail.com</span>
      </div>
    </Block>
  );
};

export default Contact;
