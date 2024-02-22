import React from "react";
import { Page, Navbar, Block, BlockTitle, Icon } from "framework7-react";

const Info = (props) => {
  console.log("props");
  console.log(props);
  const { data } = props;
  return (
    <Block className="block">
      <Block className="avatar-wrapper">
        <img className="avatar" src={data?.avatar} />
        <div className="divider"></div>
      </Block>
      <div className="hello">{data?.pageTitle}</div>
      <div className="summary">
        {data?.characteristicList?.map((item) => (
          <div className="summary-item" key={item.id}>
            <Icon icon="react" size={40} color="#005bc1" />
            <p className="sub-title">{item.characteristicTitle}</p>
            <p className="summary-text">{item.characteristicContent}</p>
          </div>
        ))}
      </div>
      <BlockTitle>About Me</BlockTitle>
      <Block>
        {data?.aboutMe?.map((item) => (
          <p key={item.id}>{item.content}</p>
        ))}
      </Block>
      <BlockTitle>What I do</BlockTitle>
      <Block>
        {data?.whatIDo?.map((item) => (
          <p key={item.id}>{item.content}</p>
        ))}
      </Block>
      <BlockTitle>Skillset</BlockTitle>
      <Block className="skill">
        {data?.skillset?.map((item) => (
          <div className="skill-item" key={item.id}>
            <Icon icon={item.icon} size={40} />
            <p>{item.content}</p>
          </div>
        ))}
      </Block>
    </Block>
  );
};

export default Info;
