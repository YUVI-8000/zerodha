import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}) {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-lg-6 col-sm-12 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn more
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <img src={imageURL} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
