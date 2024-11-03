import ProductCard from "../ProductCard/ProductCard";

export default function AllProduct({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
      {data.map((p) => (
        <ProductCard key={p.product_id} product={p}></ProductCard>
      ))}
    </div>
  );
}
