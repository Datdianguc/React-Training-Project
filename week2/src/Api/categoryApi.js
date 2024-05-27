import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/todostorage";
    return axiosClient.get(url, { params });
  }, // truyen url va object config
  get(id) {
    const url = `/todostorage/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/todostorage/${id}`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/todostorage/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/todostorage/${id}`;
    return axiosClient.delete(url);
  },
};
