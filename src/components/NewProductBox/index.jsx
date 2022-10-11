import React from "react";
import { ProductExpand } from "../ProductExpand";
import { Productholder } from "../Productholder";

import { ServiceListCheckbox } from "../ServiceListCheckbox";

export const NewProductBox = () => {
  return (
    <main className="serviceHolds">
      <ProductExpand />
      <section className="gridproduct">
        <section>
          <ServiceListCheckbox />
        </section>

        <section>
          <Productholder />
        </section>
      </section>
    </main>
  );
};
