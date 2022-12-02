import http from "./httpServices";
export function addNewComment(data) {
    return http.post("/comments" , data)
}