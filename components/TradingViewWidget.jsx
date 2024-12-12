import React, { useEffect } from "react";
import "./style.css";

const TradingViewWidget = () => {
  useEffect(() => {
    const scriptId = "tradingview-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.TradingView) {
          new window.TradingView.widget({
            container_id: "tradingview-widget-container",
            width: "100%",
            height: "100%",
            symbol: "NASDAQ:AAPL", // Example symbol
            interval: "D",
            theme: "dark", // Set theme to dark
            style: "1", // Candlestick style
            locale: "en",
            toolbar_bg: "rgba(0, 0, 0, 0)", // Transparent toolbar
            enable_publishing: false,
            hide_top_toolbar: true,
            hide_side_toolbar: true,
            allow_symbol_change: true,
            withdateranges: false,
            backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
          });
        }
      };
    }

    return () => {
      const widgetContainer = document.getElementById(
        "tradingview-widget-container"
      );
      if (widgetContainer) {
        widgetContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="tradingview-widget-container"
      className="tradingview-widget-container"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default TradingViewWidget;
