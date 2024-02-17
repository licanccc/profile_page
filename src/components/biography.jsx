import {
  Block,
  BlockHeader,
  BlockTitle,
  List,
  ListItem,
} from "framework7-react";

const Biography = () => {
  return (
    <Block className="biography">
      <BlockTitle className="title">Biography</BlockTitle>
      <Block>
        Japanese artist, born in 1978, lives and works in Berlin, Germany.
        Kurokawa’s works take on multiple forms such as installation works,
        recordings, and concert pieces. He composes the time sculpture with the
        field recordings and the digital generated structures, and reconstructs
        architecturally the audiovisual phenomenon. In recent years, his works
        are shown across the world"at international festivals and museums
        including TATE Modern [UK], Centre Pompidou [FR], Venice Biennale [IT],
        Palais de Tokyo [FR], Barbican Centre [UK], ARS Electronica [AT], Mutek
        [CA/MX/JP/ES], Tretyakov Gallery [RU], Minsheng Art Museum [CN], YCAM
        [JP], EMPAC [US], LABoral [ES], FACT [UK], Palais des Beaux-Arts [BE],
        National Taiwan Museum of Fine Arts [TW], National Centre for
        Contemporary Arts [RU], CTM/Transmediale [DE], ACC [KR], Espace Culturel
        Louis Vuitton [FR] and Sonar [ES/UK/JP]. In 2010, he was awarded the
        Golden Nica at Prix Ars Electronica in the Digital Musics & Sound Art
        category.
      </Block>
      <BlockTitle>Selected Group Exhibitions</BlockTitle>
      <Block>
        <ul>
          <li>Future Shock, "re-assembli", 180 The Strand, London, 2022</li>
          <li>
            Living Matter, "lttrans" & "lttrans_ctx", New Tretyakov Gallery,
            Moscow, 2021
          </li>
          <li>
            attraper le JE / champs de JEU, "unfold.alt", National Taiwan Museum
            of Fine Arts, Taichung, 2020
          </li>
          <li>Future Shock, "re-assembli", 180 The Strand, London, 2022</li>
          <li>Future Shock, "re-assembli", 180 The Strand, London, 2022</li>
          <li>Future Shock, "re-assembli", 180 The Strand, London, 2022</li>
        </ul>
      </Block>
      <Block>
        <BlockTitle>Selected Awards and Fellowships</BlockTitle>
        <ul>
          <li>
            Director, Kinetic Media Lab/ACT, ACC (Asia Cultural Center),
            Gwangju, 2016
          </li>
          <li>
            Guset Professor/Invited Artist, Le Fresnoy - Studio National des
            Arts Contemporains, Tourcoing, 2011-12
          </li>
        </ul>
      </Block>
    </Block>
  );
};

export default Biography;
