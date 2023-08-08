import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import CategorySingle from "../../components/category-single";
import ServiceSingle from "../../components/service-single";

const CategoryDetailPage = () => {
  const param = useParams();

  const api = useApi();

  const [categoryDetail, setCategoryDetail] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await api.get(
        `/public/categories/getBySlug/${param.slug}`
      );
      setCategoryDetail(response.data.data);
    })();
  }, [param.slug]);

  if (categoryDetail === null) {
    return <div>Yükleniyor ...</div>;
  }

  return (
    <div>
      <h1>Category : {categoryDetail.category.name}</h1>
      <p>{categoryDetail.category.description}</p>

      <hr />

      <h1>Sub Categories</h1>

      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoryDetail.category.children.map((category) => {
          return <CategorySingle category={category} />;
        })}
      </div>

      <h1>Services</h1>

      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoryDetail.services.map((service) => {
          return <ServiceSingle service={service} />;
        })}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
