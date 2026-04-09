import { AddCategoryForm, CategoriesList } from "./components"
import "../Style/Categories.css"

const Categories = () => {
  return (
    <div className="categories">
      <h2>Categories</h2>

      <AddCategoryForm />

      <CategoriesList />
    </div>
  );
}

export default Categories