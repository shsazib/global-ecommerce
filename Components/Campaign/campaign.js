import React from "react";
import SectionTitle from '../section-title/section-title';


const Campaign = () => {
  return (
    <>
      <div className="campaign_section content_container">
            <SectionTitle 
            title = "Campaign"
            link = "#"
            view_more = "More Campaign"
            />

        <div className="campaign_content">
          <div className="campaign_single_content">
            <img src="offer/exclusive offer.png"></img>
            <span>27 Mar 2022 - 30 Apr 2025</span>
            <h4>Exclusive Offer</h4>
            <p>Exclusive</p>
            <button className="btn_1">Get Discount</button>
          </div>
          <div className="campaign_single_content">
            <img src="offer/deals made especially for you.png"></img>
            <span>21 Mar 2006 - 10 Apr 2010</span>
            <h4>Deals made especially for you</h4>
            <p>Offer</p>
            <button className="btn_1">Get Discount</button>
          </div>
          <div className="campaign_single_content">
            <img src="offer/the biggest sale.png"></img>
            <span>20 Mar 2012 - 25 Apr 2022</span>
            <h4>The biggest sale</h4>
            <p>The biggest sale</p>
            <button className="btn_1">Get Discount</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campaign;
