import AllCategories from "@/Components/all-categories/all-categories";
import Campaign from "@/Components/Campaign/campaign";
import HomeTopSlider from "@/Components/home-top-slider/HomeTopSlider";
import Global_list from "@/Components/global-list/global_list";
import Home_percent_off from "@/Components/home-percent-off/Home_percent_off";

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
        </div>
      </div>
    </>
  );
}
