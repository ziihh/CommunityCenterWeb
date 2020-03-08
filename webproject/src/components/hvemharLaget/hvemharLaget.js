import React, { Component } from "react";
import bannerBilde from "../../images/utviklerentnu.png";
import "../../css/hvemharLaget.css";
import "../../css/footerPartnerSide.css";
import HeaderBody from "../headerBody";
import ScrollTopButton from "../topbutton/topButton";
import FooterPartnerSide from "../footer/footerPartnerSide";

class HvemharLaget extends Component {
  render() {
    return (
      <div className="PartnerSide">
        <HeaderBody />
        <div class="sideMargin">
          <div class="wrapper">
            <img
              className="grid_img"
              src={bannerBilde}
              alt="Et banner bilde av ntnu sin logo"
              width="100%"
            />

            <div>
              <p id="textpartner">
                <span className="større">Nettsiden er laget av: </span> Stian
                Hjulstad Nilsen, Zain Butt, Leif Christian Brenna, Aina Kvamme
                Bru og Bjørn Bordewich Gyles{" "}
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                  tristique nibh. Vestibulum vel erat vehicula, dapibus est sed,
                  eleifend felis. Morbi vel semper dolor, et luctus felis. Cras
                  malesuada mattis metus id ornare. Phasellus auctor ligula
                  ultricies nisl dapibus elementum vel quis magna. Vivamus urna
                  sapien, venenatis a orci eu, facilisis aliquet ante. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Phasellus auctor lorem vitae libero
                  ultrices, eu imperdiet risus venenatis. Ut sagittis ultricies
                  velit et sagittis. Aliquam auctor efficitur dui sed laoreet.
                  Integer justo metus, pretium id erat ac, congue mattis mauris.{" "}
                </p>
              </p>
            </div>

            <div>
              <p id="textpartner">
                <span className="større">Videreutviklet design fra...</span>{" "}
                morbi ac quam et mauris varius ultrices vitae vitae dui. Mauris
                sapien nibh, suscipit et molestie id, lacinia vitae odio.
                Maecenas vestibulum quam eu nisi commodo, ultrices porttitor
                elit congue. Nullam lacinia ligula sit amet arcu scelerisque
                rhoncus. Donec ac feugiat sem. Cras hendrerit lorem quis mi
                mollis ullamcorper. Phasellus auctor ligula ultricies nisl
                dapibus elementum vel quis magna. Vivamus urna sapien, venenatis
                a orci eu, facilisis aliquet ante. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
                Phasellus auctor lorem vitae libero ultrices, eu imperdiet risus
                venenatis. Ut sagittis ultricies velit et sagittis. Aliquam
                auctor efficitur dui sed laoreet. Integer justo metus, pretium
                id erat ac, congue mattis mauris.{" "}
              </p>
            </div>
          </div>
        </div>
        <ScrollTopButton />
        <FooterPartnerSide />
      </div>
    );
  }
}

export default HvemharLaget;
