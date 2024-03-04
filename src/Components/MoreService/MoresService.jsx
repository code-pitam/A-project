import React from 'react'
import "../MoreService/moreservice.css"
import Msdata from './Msdata';

function MoresService() {
  return (
    <div className="moreservice"> 
      <div className="moreservice-section container">
        <p className="ms-heading">Lorem Ipsum is simply dummy text</p>
        <p className="ms-small-heading">
          There are strong reasons that clients choose Blue Dot Global over the
          competition. Our strengths go beyond being just an electronic goods
          merchant wholesaler and distributor and a few of them are listed here.
        </p>
        <div className="ms-boxes">
          {Msdata.map((item, intex) => (
            <div className="ms-box">
              <img src={item.urls} alt="" srcset="" />
              <p className="ms-box-heading">{item.title}</p>
              {item.description?.map((item, index) => (
                <p key={index} className="ms-box-text">{item}</p>
              ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default MoresService