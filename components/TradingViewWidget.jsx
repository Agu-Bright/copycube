import React, { useEffect } from "react";
import "./style.css";
const TradingViewWidget = () => {
  useEffect(() => {
    // Dynamically load the TradingView widget script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      exchange: "US",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: true,
      showSymbolLogo: false,
      showFloatingTooltip: false,
      width: "100%",
      height: "100% ",
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "rgba(209, 212, 220, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
    });

    document.getElementById("tradingview-widget-container").appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document
        .getElementById("tradingview-widget-container")
        .removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        id="tradingview-widget-container"
        className="tradingview-widget-container__widget"
        style={{ width: "100%", height: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
