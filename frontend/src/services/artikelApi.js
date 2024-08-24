import Api from "@/services/api";

export default {
  getAll() {
    return Api.get("/artikel");
  },
  getById(id) {
    return Api.get(`/artikel/${id}`);
  },
  create(data) {
    return Api.post("/artikel", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  update(id, data) {
    return Api.put(`/artikel/edit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  delete(id) {
    return Api.delete(`/artikel/${id}`);
  },
};
