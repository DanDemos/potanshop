/**
 * ENDPOINT OBJECT EXAMPLES
 * 
 * This file contains examples of different endpoint object structures
 * for reference when creating new endpoints.
 */

// Example response modifier function
const exampleResponseModifier = (response) => {
  return {
    ...response,
    modified: true,
    timestamp: new Date().toISOString()
  };
};

export const endpointExamples = {
  // SIMPLE GET ENDPOINT
  simpleGet: {
    method: "get",
    endpoint: "promotions"
  },

  // GET WITH PATH PARAMETER
  getWithPathParam: {
    method: "get",
    endpoint: "game/{:id}"
    // Usage: callApi("home/gameDetail").withKeyParameter({ id: 123 }).executeDispatch()
  },

  // GET WITH QUERY PARAMETERS
  getWithQueryParams: {
    method: "get",
    endpoint: "games"
    // Usage: callApi("home/gameList").withParam({ page: 1, limit: 10 }).executeDispatch()
  },

  // POST WITH BODY AND TOKEN
  postWithBody: {
    method: "post",
    endpoint: "auth/login",
    token: "require"
    // Usage: callApi("auth/login").withBody({ email, password }).executeDispatch()
  },

  // PUT WITH PATH PARAMETER AND BODY
  putWithPathParam: {
    method: "put",
    endpoint: "user/{:id}/profile",
    token: "require"
    // Usage: callApi("user/update").withKeyParameter({ id: 123 }).withBody({ name: "John" }).executeDispatch()
  },

  // DELETE WITH PATH PARAMETER
  deleteWithPathParam: {
    method: "delete",
    endpoint: "game/{:id}",
    token: "require"
    // Usage: callApi("game/delete").withKeyParameter({ id: 123 }).executeDispatch()
  },

  // GET WITH CACHING AND RESPONSE MODIFIER
  getWithCaching: {
    method: "get",
    endpoint: "user/profile",
    token: "optional",
    res_modifier: exampleResponseModifier,
    expire_in: 30 // 30 minutes cache
    // Usage: callApi("user/profile").addAccessToken().executeDispatch()
  },

  // PATCH WITH HEADERS
  patchWithHeaders: {
    method: "patch",
    endpoint: "user/settings",
    token: "require"
    // Usage: callApi("user/settings").withHeaders({ "Content-Type": "application/json" }).withBody({ theme: "dark" }).executeDispatch()
  },

  // GET WITH MULTIPLE PATH PARAMETERS
  getWithMultipleParams: {
    method: "get",
    endpoint: "category/{:categoryId}/product/{:productId}",
    token: "optional"
    // Usage: callApi("product/detail").withKeyParameter({ categoryId: 1, productId: 456 }).executeDispatch()
  },

  // POST WITH FILE UPLOAD
  postWithFile: {
    method: "post",
    endpoint: "upload/avatar",
    token: "require"
    // Usage: callApi("upload/avatar").withBody(formData).withHeaders({ "Content-Type": "multipart/form-data" }).executeDispatch()
  }
};

/**
 * USAGE PATTERNS:
 * 
 * 1. Simple GET:
 *    callApi("home/promotion").executeDispatch()
 * 
 * 2. GET with path parameter:
 *    callApi("home/gameDetail").withKeyParameter({ id: 123 }).executeDispatch()
 * 
 * 3. GET with query parameters:
 *    callApi("home/gameList").withParam({ page: 1, limit: 10 }).executeDispatch()
 * 
 * 4. POST with body:
 *    callApi("auth/login").withBody({ email: "user@example.com", password: "password" }).executeDispatch()
 * 
 * 5. PUT with path parameter and body:
 *    callApi("user/update").withKeyParameter({ id: 123 }).withBody({ name: "John Doe" }).executeDispatch()
 * 
 * 6. DELETE with path parameter:
 *    callApi("game/delete").withKeyParameter({ id: 123 }).executeDispatch()
 * 
 * 7. With custom headers:
 *    callApi("api/endpoint").withHeaders({ "X-Custom-Header": "value" }).executeDispatch()
 * 
 * 8. With loading group:
 *    callApi("home/promotion").loadingGroup("promotion").executeDispatch()
 * 
 * 9. With access token:
 *    callApi("user/profile").addAccessToken().executeDispatch()
 * 
 * 10. Execute without Redux (no caching):
 *     callApi("home/promotion").execute()
 */ 