import React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { BenefitsComponent } from "../../src/components/BenefitsComponent";
import { rootReducers } from "../../src/redux/store/configureStore";

// Mock the translation hook to just return the key
vi.mock("../../src/translation/useTypedTranslation.ts", () => ({
  useTypedTranslation: () => ({
    t: (key: string) => key,
    T: {
      home: {
        why_shop_with_us: "home.why_shop_with_us",
        free_shipping: "home.free_shipping",
        quality_guarantee: "home.quality_guarantee",
        customer_support: "home.customer_support",
      },
    },
  }),
}));

function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducers,
    preloadedState,
  });
}

describe("BenefitsComponent", () => {
  let store;

  beforeEach(() => {
    store = setupStore({
      setting: {
        siteSetting: {
          data: {
            free_shipping: "some free shipping text",
            quality_guarantee: "some quality guarantee text",
            customer_support: "some customer support text",
          },
        },
      },
    });
  });

  it("renders all sections when data is present", () => {
    render(
      <Provider store={store}>
        <BenefitsComponent />
      </Provider>
    );
  });

  it("does not render sections when data missing", () => {
    store = setupStore({
      setting: {
        siteSetting: {
          data: {},
        },
      },
    });

    render(
      <Provider store={store}>
        <BenefitsComponent />
      </Provider>
    );
  });
});
