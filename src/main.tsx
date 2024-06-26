import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Toaster } from "./components/ui/Toaster";
import {
  biconomyApiIdConst,
  biconomyApiKeyConst,
  chainConst,
  relayerUrlConst,
  clientIdConst,
} from "./consts/parameters";
import { Optimism } from "@thirdweb-dev/chains";

const container = document.getElementById("root");

const root = createRoot(container!);
const urlParams = new URL(window.location.toString()).searchParams;

const chain = (urlParams.get("chain") && urlParams.get("chain")?.startsWith("{")) ? JSON.parse(String(urlParams.get("chain"))) : urlParams.get("chain") || Optimism;

const clientId = urlParams.get("clientId") || clientIdConst || "";


root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={chain} clientId={clientId}>
      <Toaster />
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);
