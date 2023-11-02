import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const listItems = topics.map((topic) => {return (
  <TopicListItem
    key={topic.id}
    slug={topic.slug}
    title={topic.title} 
  />)})

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {listItems}
    </div>
  );
};

export default TopicList;
