import Api from "@/services/api";

export default {
  getAll() {
    return Api.get("/gallery");
  },
  getById(id) {
    return Api.get(`/gallery/${id}`);
  },
  create(data) {
    return Api.post("/gallery", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  update(id, data) {
    return Api.put(`/gallery/edit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  delete(id) {
    return Api.delete(`/gallery/${id}`);
  },
};
