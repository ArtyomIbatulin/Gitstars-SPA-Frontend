import React, { useState } from "react";
import { RepoItem } from "./RepoItem";
import { useSelector } from "react-redux";

export const RepoList = () => {
  const repos = useSelector((state) => state.repo.repos);

  return (
    <div className="repo-list">
      {repos.map((item) => (
        <RepoItem key={item._id} item={item} />
      ))}
    </div>
  );
};
