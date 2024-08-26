import Api from "@/services/api";

export default {
  getAll() {
    return Api.get("/board");
  },
  getById(id) {
    return Api.get(`/board/${id}`);
  },
  create(data) {
    return Api.post("/board", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  update(id, data) {
    return Api.put(`/board/edit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  delete(id) {
    return Api.delete(`/board/delete/${id}`);
  },
};
