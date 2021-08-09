import React from "react";
import PropTypes from "prop-types";

const Item = ({ item, handleVision }) => {
  return (
    <React.Fragment>
      <tr onClick={() => handleVision(item.name)}>
        <td>
          <img
            className="rounded float-left"
            style={{ width: "200px" }}
            src={item.imgSrc}
            alt={item.name}
            
          />
        </td>
        <td>
          <h4>{item.name}</h4>
        </td>
        <td>
          <h4>{item.price}</h4>
        </td>
      </tr>
    </React.Fragment>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
