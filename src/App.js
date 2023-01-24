import { useEffect } from "react";
import Router from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  //* removing logs in production
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      return;
    }
    const noop = () => {};
    [
      "assert",
      "clear",
      "count",
      "debug",
      "dir",
      "dirxml",
      "error",
      "exception",
      "group",
      "groupCollapsed",
      "groupEnd",
      "info",
      "log",
      "markTimeline",
      "profile",
      "profileEnd",
      "table",
      "time",
      "timeEnd",
      "timeline",
      "timelineEnd",
      "timeStamp",
      "trace",
      "warn",
    ].forEach((method) => {
      window.console[method] = noop;
    });
  });

  return (
    <>
      <ChakraProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
