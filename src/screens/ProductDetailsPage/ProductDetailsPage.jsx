import React from "react";
import { ButtonLargeIcon } from "../../components/ButtonLargeIcon";
import { ButtonSmallApple } from "../../components/ButtonSmallApple";
import { ButtonTwoButtons } from "../../components/ButtonTwoButtons";
import { IconsLargeDot } from "../../components/IconsLargeDot";
import { IconsMediumHeart } from "../../components/IconsMediumHeart";
import { IconsSmallDown } from "../../components/IconsSmallDown";
import { IconsSmallShare } from "../../components/IconsSmallShare";
import { MiscOtherVariant } from "../../components/MiscOtherVariant";
import { MiscTagSmallTag } from "../../components/MiscTagSmallTag";
import { MiscTagTapToView } from "../../components/MiscTagTapToView";
import { NavigationTop } from "../../components/NavigationTop";
import { PopUpsMisc } from "../../components/PopUpsMisc";
import { ProductLayoutsMisc } from "../../components/ProductLayoutsMisc";
import { TextLayoutsMisc } from "../../components/TextLayoutsMisc";
import { TextLayoutsText } from "../../components/TextLayoutsText";
import "./style.css";

export const ProductDetailsPage = () => {
  return (
    <div className="product-details-page">
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <img
            className="overlay"
            alt="Overlay"
            src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/overlay.svg"
          />
          <div className="rectangle" />
          <NavigationTop
            cap="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/cap.svg"
            cellularConnection="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/cellular-connection.svg"
            className="navigation-top-instance"
            hClassName="icons-small-down-arrow-wrapper"
            override={
              <IconsSmallDown
                className="icons-small-down-arrow-instance"
                iconsSmallDown="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---small---down-arrow-3.svg"
              />
            }
            text="Filter"
            timeClassName="icons-small-down-wrapper"
            wifi="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/wifi.svg"
          />
          <div className="frame">
            <div className="discount-price">$1628</div>
            <div className="original-price">$2035</div>
          </div>
          <p className="BORIS-BIDJAN-SABERI">
            <a
              href="https://www.ssense.com/en-us/men/designers/boris-bidjan-saberi"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-2">
                BORIS BIDJAN SABERI
                <br />
              </span>
            </a>
            <span className="text-wrapper-3">Gray Reversible Outdoor 4 ST Jacket</span>
          </p>
          <ProductLayoutsMisc
            className="product-layouts-misc-PDP-image"
            iconsLargePdpIconsSmallHeartIconsSmallHeart="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons--small---heart.svg"
            iconsSmallDownIconsSmallDown="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---small---down-arrow-3.svg"
          />
          <MiscOtherVariant
            className="misc-other-variant-selector"
            textClassName="design-component-instance-node"
            textClassNameOverride="design-component-instance-node"
          />
          <ButtonTwoButtons
            buttonSmallText="Add to Cart"
            buttonSmallTextClassName="design-component-instance-node-2"
            className="button-two-buttons-standard"
            override={<ButtonSmallApple className="button-small-apple-pay" />}
          />
          <ButtonLargeIcon
            className="button-large-icon-instance"
            contentClassName="icons-small-share-instance-wrapper"
            icon={<IconsSmallShare />}
            overlapGroupClassName="icons-small-share-wrapper"
            text="Share"
            textClassName="button-large-icon-2"
          />
          <ButtonLargeIcon
            className="button-large-icon-3"
            contentClassName="icons-small-share-instance-wrapper"
            icon={<IconsSmallShare />}
            overlapGroupClassName="icons-small-share-wrapper"
            text="Add to Cart"
            textClassName="button-large-icon-2"
          />
          <div className="links">
            <div className="links-2">
              <TextLayoutsText
                className="text-layouts-text-line-full-width"
                text="Product Description"
                textClassName="design-component-instance-node-2"
              />
              <TextLayoutsText
                className="text-layouts-text-instance"
                text="Size Guide"
                textClassName="design-component-instance-node-2"
              />
              <TextLayoutsText
                className="text-layouts-text-line-full-width-instance"
                text="Shipping Details"
                textClassName="design-component-instance-node-2"
              />
              <img
                className="line"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/line-9.svg"
              />
              <img
                className="img"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/line-9.svg"
              />
              <img
                className="line-2"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/line-9.svg"
              />
              <img
                className="line-3"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/line-9.svg"
              />
            </div>
          </div>
          <div className="product-layouts">
            <div className="product-layouts-2">
              <p className="title">Complete the look for an additional 15% off</p>
              <div className="carousel-images">
                <div className="product-layouts-3">
                  <div className="img-2" />
                  <div className="bottom-content">
                    <div className="top-line-content">
                      <div className="pricing-info">
                        <div className="discount-price">$840</div>
                        <div className="original-price-2">$1050</div>
                      </div>
                      <IconsMediumHeart className="icons-medium-heart-instance" />
                    </div>
                    <div className="product-title">Grey Object-Dyed Jeans</div>
                  </div>
                </div>
                <div className="product-layouts-3">
                  <div className="img-3" />
                  <div className="bottom-content">
                    <div className="top-line-content">
                      <div className="pricing-info">
                        <div className="discount-price">$1652</div>
                        <div className="original-price-2">$2065</div>
                      </div>
                      <IconsMediumHeart className="icons-medium-heart-instance" />
                    </div>
                    <div className="product-title">Beige 1 Boot</div>
                  </div>
                </div>
                <div className="product-layouts-3">
                  <div className="img-4" />
                  <div className="bottom-content">
                    <div className="top-line-content">
                      <div className="pricing-info">
                        <div className="discount-price">$24.99</div>
                        <div className="original-price-2">$36.99</div>
                      </div>
                      <IconsMediumHeart
                        className="icons-medium-heart-2"
                        iconsMediumHeart="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---medium---heart-3@2x.png"
                      />
                    </div>
                    <p className="product-title">Gray Reversible Outdoor 4 ST Jacket</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layouts-4">
              <div className="title">Other customers purchased</div>
              <div className="carousel-images">
                <div className="product-layouts-3">
                  <div className="img-5" />
                  <div className="bottom-content">
                    <div className="top-line-content">
                      <div className="pricing-info">
                        <div className="discount-price">$764</div>
                        <div className="original-price-2">$955</div>
                      </div>
                      <IconsMediumHeart
                        className="icons-medium-heart-instance"
                        iconsMediumHeart="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---medium---heart-10.svg"
                      />
                    </div>
                    <div className="product-title">Bamba 2</div>
                  </div>
                </div>
                <div className="product-layouts-3">
                  <div className="img-6" />
                  <div className="bottom-content">
                    <div className="top-line-content">
                      <div className="pricing-info">
                        <div className="discount-price">$764</div>
                        <div className="original-price-2">$955</div>
                      </div>
                      <IconsMediumHeart
                        className="icons-medium-heart-instance"
                        iconsMediumHeart="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---medium---heart-10.svg"
                      />
                    </div>
                    <div className="product-title">Bamba 2 Navy</div>
                  </div>
                </div>
                <div className="product-layouts-3">
                  <div className="img-7" />
                  <div className="bottom-content">
                    <div className="top-line-content">
                      <div className="pricing-info">
                        <div className="discount-price">$24.99</div>
                        <div className="original-price-2">$36.99</div>
                      </div>
                      <IconsMediumHeart
                        className="icons-medium-heart-3"
                        iconsMediumHeart="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---medium---heart@2x.png"
                      />
                    </div>
                    <p className="product-title">Gray Reversible Outdoor 4 ST Jacket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-layouts-5">
            <div className="overlap-3">
              <IconsLargeDot
                className="icons-large-dot-instance"
                iconsLargeDot="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---large---dot.svg"
              />
              <PopUpsMisc
                className="pop-ups-misc-460-product-info"
                mask="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/mask.svg"
                priceClassName="design-component-instance-node"
                productLayoutsMiscClassName="pop-ups-misc-460-product-info-instance"
                productNameClassName="pop-ups-misc-instance"
                text="Crux De vie Jacket"
                text1="$1450"
              />
            </div>
            <div className="overlap-4">
              <img
                className="second-image"
                alt="Second image"
                src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/second-image.svg"
              />
              <MiscTagTapToView
                className="misc-tag-tap-to-view-products"
                iconsSmallShoppingIconsSmallShopping="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---small---shopping-bag-filled.svg"
                textClassName="design-component-instance-node"
              />
            </div>
            <div className="product-title-2">
              <p className="title-2">&nbsp;&nbsp;View &amp; Buy the looks from PFW on Instagram</p>
              <div className="text-wrapper-4">View All</div>
            </div>
          </div>
          <MiscTagSmallTag
            className="misc-tag-small-tag-instance"
            text="GRAY REVERSIBLE"
            textClassName="misc-tag-small-tag-2"
          />
          <TextLayoutsMisc
            className="text-layouts-misc-text-left-logo-right"
            logosSmallAfterpayLogosSmallAfterpay="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/logos---small---afterpay-1.svg"
            textClassName="design-component-instance-node"
            textClassNameOverride="design-component-instance-node"
          />
        </div>
      </div>
    </div>
  );
};
