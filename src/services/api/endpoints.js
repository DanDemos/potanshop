// import { res_modifiers_config } from "../../helper/res_modifiers_config";

// Define the API URLs for different environments
export const API_URLs = {
  production: import.meta.env.VITE_PRODUCTION_ENDPOINT,
  development: import.meta.env.VITE_DEVELOP_ENDPOINT,
};

export const endpoints = Object.freeze({
  home: {
    homeBanners: {
      method: "get",
      endpoint: "home-banners"
    },
    promotion: {
      method: "get",
      endpoint: "promotions",
      // res_modifier: res_modifiers_config.getAccessToken,
      // token: "optional", // require, optional
      // expire_in: 10
    },
  },
  game: {
    list: {
      method: "get",
      endpoint: "games",
    },
    detail: {
      method: "get",
      endpoint: "game/{:id}",
    },
    productList: {
      method: "get",
      endpoint: "products/{:id}",
    }
  },
  setting: {
    siteSetting: {
      method: "get",
      endpoint: "site-settings",
    },
  },
  contact: {
    submit:{
      method: "post",
      endpoint: "contact"
    }
  }
});


/**
 * ENDPOINT OBJECT STRUCTURE
 * 
 * Each endpoint should follow this structure:
 * {
 *   method: "get" | "post" | "put" | "delete" | "patch",
 *   endpoint: "string", // The API path
 *   token?: "require" | "optional", // Optional: token requirement
 *   res_modifier?: function, // Optional: response modifier function
 *   expire_in?: number // Optional: cache expiration time in minutes
 * }
 * 
 * REQUIRED PROPERTIES:
 * - method: HTTP method ("get", "post", "put", "delete", "patch")
 * - endpoint: API path (can include path parameters like "game/{:id}")
 * 
 * OPTIONAL PROPERTIES:
 * - token: "require" (fails without token) | "optional" (includes token if available)
 * - res_modifier: Function to transform API response before storing in Redux
 * - expire_in: Cache expiration time in minutes (used with executeDispatch)
 * 
 * PATH PARAMETERS:
 * - Use {:paramName} syntax in endpoint string
 * - Replace with withKeyParameter({ paramName: value })
 * - Example: "game/{:id}" + withKeyParameter({ id: 123 }) = "game/123"
 */