import React from "react";
import "./PackageFeatures.scss";
export const PackageFeatures = () => {
  return (
    <section className="package-features-main">
      <h1>Package Features</h1>
      <table>
        <tr className="row-1">
          <th className="col-1">Feature 01</th>
          <th className="col-2"></th>
          <th className="col-3"></th>
          <th className="col-4"></th>
        </tr>
        <tr className="row-2">
          <td className="col-1">Feature 01</td>
          <td className="col-2">Feature 01</td>
          <td className="col-3">Feature 01</td>
          <td className="col-4">Feature 01</td>
        </tr>
        <tr className="row-3">
          <td className="col-1">Feature 01</td>
          <td className="col-2">Feature 01</td>
          <td className="col-3">Feature 01</td>
          <td className="col-4">Feature 01</td>
        </tr>
        <tr className="row-4">
          <td className="col-1">Feature 01</td>
          <td className="col-2">Feature 01</td>
          <td className="col-3">Feature 01</td>
          <td className="col-4">Feature 01</td>
        </tr>
        <tr className="row-5">
          <td className="col-1">Feature 01</td>
          <td className="col-2">-</td>
          <td className="col-3">Feature 01</td>
          <td className="col-4">Feature 01</td>
        </tr>
        <tr className="row-6">
          <td className="col-1">Feature 01</td>
          <td className="col-2">-</td>
          <td className="col-3">Feature 01</td>
          <td className="col-4">Feature 01</td>
        </tr>
        <tr className="row-7">
          <td className="col-1">Feature 01</td>
          <td className="col-2">-</td>
          <td className="col-3">-</td>
          <td className="col-4">Feature 01</td>
        </tr>
        <tr className="row-8">
          <td className="col-1"></td>
          <td className="col-2">
            <div className="price">
              <p className="cut-text">$499</p>
              <p className="new-price">$399</p>
              <button className="item-shop">SHOP NOW</button>
            </div>
          </td>
          <td className="col-3">
            {" "}
            <div className="price">
              <p className="cut-text">$599</p>
              <p className="new-price">$499</p>
              <button className="item-shop">SHOP NOW</button>
            </div>
          </td>
          <td className="col-4">
            {" "}
            <div className="price">
              <p className="cut-text">$699</p>
              <p className="new-price">$599</p>
              <button className="item-shop">SHOP NOW</button>
            </div>
          </td>
        </tr>
      </table>
    </section>
  );
};
