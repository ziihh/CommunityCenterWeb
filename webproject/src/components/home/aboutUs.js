import React from 'react';
import '../../css/aboutUs.css';
import community from '../../images/community.jpg';
const info =
  'The Lorem Ipsum is simply dummy text of the composition and layout before printing. Lorem Ipsum has been the standard false text of the printing press since the 1500s, when an anonymous printer assembled pieces of text together to make a sample text font book. It has not only survived five centuries,';
const info_1 =
  'but has also adapted to computer office automation, without its content being modified. It was popularized in the 1960s with the sale of Letraset sheets containing passages from the Lorem Ipsum, and, more recently, by its inclusion in text layout applications, such as Aldus PageMaker.';
const info_2 =
  'Contrary to popular opinion, the Lorem Ipsum is not just random text. It finds its roots in a work of classical Latin literature dating from 45 BC. AD, making it 2000 years old.';
const readMore = 'Les mer i Aftenposten: ';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUs">
        <h2 className="homePageAoutUsHeader"> Community Center </h2>
        <p>
          <img
            className="præstgarnHouse"
            src={community}
            alt="It's præstgarn house."
          />
          {info}
        </p>
        <p> {info_1} </p> <p> {info_2} </p>
        <p id="readMore">
          {readMore} <a>Vil gjøre community center til historisk kulturhus </a>
        </p>
      </div>
    );
  }
}

export default AboutUs;
