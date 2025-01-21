"use client";

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const container = useRef<any>("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "OANDA:XAUUSD|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "Trebuchet MS, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "candlesticks",
          "headerFontSize": "small",
          "lineType": 0,
          "dateRanges": [
            "1d|15"
          ],
          "upColor": "rgba(0, 0, 0, 1)",
          "downColor": "rgba(255, 255, 255, 1)",
          "borderUpColor": "rgba(0, 0, 0, 1)",
          "borderDownColor": "rgba(0, 0, 0, 1)",
          "wickUpColor": "rgba(0, 0, 0, 1)",
          "wickDownColor": "rgba(0, 0, 0, 1)"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full h-full" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
