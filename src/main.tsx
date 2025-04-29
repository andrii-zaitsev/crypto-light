import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@radix-ui/themes/styles.css";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Theme>
          <App />
        </Theme>
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>
);
