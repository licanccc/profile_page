import React, { useEffect, useState } from "react";
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Icon,
  Toolbar,
  Tabs,
  Tab,
} from "framework7-react";
import Info from "../components/info";
import Work from "../components/work";
import Biography from "../components/biography";
import Contact from "../components/contact";
import axios from "axios";

const HomePage = () => {
  const [selected, setSelected] = useState("info");
  const [data, setData] = useState({});

  const getInfo = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/licanccc/profile_db/db"
      );
      const { data } = response;
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getInfo();
    }
    fetchData();
  }, []);

  return (
    <Page name="home">
      <Navbar sliding={false} title="LIQIONGYU">
        <NavRight>
          <div className="social-media-wrapper">
            <Block className="social-media">
              <Link href="https://www.instagram.com" target="_blank" external>
                <Icon icon="instagram" size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100026149746006"
                target="_blank"
                external
              >
                <Icon icon="facebook" size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCW1798NA7oE5DitGZO7ou-A"
                target="_blank"
                external
              >
                <Icon icon="youtube" size={24} />
              </Link>
            </Block>
          </div>
        </NavRight>
      </Navbar>
      <Toolbar tabbar top>
        <Link tabLink="#info" tabLinkActive>
          Info
        </Link>
        <Link tabLink="#work">Project</Link>
        <Link tabLink="#biography">Biography</Link>
        <Link tabLink="#contact">Contact</Link>
      </Toolbar>
      <Tabs>
        <Tab id={"info"} tabActive>
          <Info data={data?.pages?.find((item) => item?.pageName === "info")} />
        </Tab>
        <Tab id={"work"}>
          <Work
            data={data?.pages?.find((item) => item?.pageName === "project")}
          />
        </Tab>
        <Tab id={"biography"}>
          <Biography
            data={data?.pages?.find((item) => item?.pageName === "biography")}
          />
        </Tab>
        <Tab id={"contact"}>
          <Contact
            data={data?.pages?.find((item) => item?.pageName === "contact")}
          />
        </Tab>
      </Tabs>
      <Toolbar bottom>
        <p style={{ textAlign: "center", width: "100%" }}>
          © 2023 LIQIONGYU. All rights reserved.
        </p>
      </Toolbar>
    </Page>
  );
};
export default HomePage;
