import React from "react";

import CollectionItem from '../collection-item/collection-item.component'

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...otherItemProps}) => (
          <CollectionItem key={items.id} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
