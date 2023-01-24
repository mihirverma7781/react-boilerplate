export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  User: {
    GetUser: {
      Endpoint: "/user",
      Method: HttpMethod.Get,
    },
  },
};

export default ApiRoutes;
