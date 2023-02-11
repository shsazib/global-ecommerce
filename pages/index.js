import AllCategories from "@/Components/all-categories/all-categories";

export default function Home() {
  return (
    <>
      <div className="home_section">
        <div className="categories_slider content_container">
        <AllCategories />
        </div>
      </div>
    </>
  );
}
