import React from "react";
import { ProductsModal } from "../modals";
export const ProductTableContent = ({
  sn,
  product_id,
  product,
  category,
  manufacturer,
  cprice,
  sprice,
  available,
  unit,
  quantity,
  miniQty,
  action,
  isExpanded,
}) => {
  const [viewMore, setViewMore] = React.useState(false);
  return (
    <>
      <td>{sn}</td>
      <td>{product}</td>
      <td className={!isExpanded && "hide"}>{category}</td>
      <td className={!isExpanded && "hide"}>{manufacturer}</td>
      <td>{"₦" + cprice}</td>
      <td>{"₦" + sprice}</td>
      <td>{available}</td>
      <td className={!isExpanded && "hide"}>{unit}</td>
      <td>
        <div className="quantify">{quantity}</div>
      </td>
      <td className={!isExpanded && "hide"}>
        <button onClick={() => {
          setViewMore(true);
          }} className="CTA">{action}</button>
      </td>
      
      <ProductsModal
                   sn={sn} 
                   id={product_id}
                   product={product}
                   category={category}
                   manufacturer={manufacturer}
                   cprice={cprice}
                   sprice={sprice}
                   available={available}
                   unit={unit}
                   quantity={quantity}
                   minQty={miniQty}
                 closeModal={setViewMore}
                 isOpen={viewMore}
                 />
    </>
  );
};
