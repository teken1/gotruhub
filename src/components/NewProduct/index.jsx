import React from "react";
import { ProductExpand } from "../ProductExpand";
import { Productholder } from "../Productholder";

import { ServiceList } from "../ServiceList";

export const NewProduct = () => {
  return (
    <main className="serviceHolds">
      <ProductExpand />
      <section className="gridproduct">
        <section>
          <ServiceList />
        </section>

        <section>
          <Productholder />
        </section>
      </section>
    </main>
  );
};
