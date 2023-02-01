import React from "react";

export const RepoItem = ({ item }) => {
  return (
    <div className="repo-item">
      <div>
        {" "}
        {`id: `}
        <span className="repo-item-span">{item.idRepo}</span>{" "}
      </div>
      <div>
        {" "}
        {`Название: `}
        <span className="repo-item-span">{item.name}</span>{" "}
      </div>
      <div>
        {" "}
        {`Автор: `}
        <span className="repo-item-span">{item.owner_login}</span>
      </div>
      <div>
        <span className="repo-item-span"> {item.html_url}</span>
      </div>
      <div>
        {" "}
        {`Количество звезд: `}
        <span className="repo-item-span">{item.stargazers_count}</span>{" "}
      </div>
    </div>
  );
};
