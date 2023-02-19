import AllCategories from "@/Components/all-categories/all-categories";
import Campaign from "@/Components/Campaign/campaign";
import HomeTopSlider from "@/Components/home-top-slider/HomeTopSlider";
import Global_list from "@/Components/global-list/global_list";
import Home_percent_off from "@/Components/home-percent-off/Home_percent_off";
import Home_banner from "@/Components/home-banner/home_banner";
import PopularCategories from "@/Components/popular-categories/popular_categories";
import Top_cat_this_month from "@/Components/top-cat-this-month/top_cat_this_month";
import Popular_brand from "@/Components/popular-brand/popular_brand";
import Today_deals from "@/Components/today-deals/Today_deals";
import Flash_sale from "@/Components/flash-sale/Flash_sale";
import Best_selling_product from "@/Components/best-selling-product/Best_selling_product";
import Latest_products from "@/Components/latest-products/Latest_products";

export default function Home() {
  return (
    <>
      <div className="home_section">
        <div className="home_section_content">
          <div className="categories_slider content_container">
            <AllCategories />
            <div className="grid gap-4">
              <HomeTopSlider />
              <Home_percent_off />
            </div>
          </div>
          <div className="content_container">
            <Global_list />
          </div>
          <Campaign />
          <div className="content_container py-5">
            <Home_banner />
          </div>
          <PopularCategories />
          <Top_cat_this_month />
          <Today_deals />
          <Flash_sale />
          <Best_selling_product />
          <Latest_products />
          <Popular_brand />
        </div>
      </div>
    </>
  );
}
