import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics }) => {

  const listItems = topics.map((topic) => {return (
    <TopicListItem
      key={topic.id}
      slug={topic.slug}
      title={topic.title} 
    />)})

  return (
    <div className="top-nav-bar__topic-list">
      {listItems}
    </div>
  );
};

export default TopicList;
