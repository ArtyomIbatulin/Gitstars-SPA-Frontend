import { $host } from "./index";

export const start = async () => {
  await $host.post("/api/repo");
};

export const fetchRepos = async () => {
  const { data } = await $host.get("/api/repos");
  return data;
};

export const fetchRepoByName = async (name) => {
  const { data } = await $host.post("api/repo-name", {
    name,
  });
  return data;
};
export const fetchRepoById = async (idRepo) => {
  const { data } = await $host.post("api/repo-id", {
    idRepo,
  });
  return data;
};
export const deleteAll = async () => {
  await $host.delete("api/remove");
};
