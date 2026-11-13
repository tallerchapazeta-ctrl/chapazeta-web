"use client";

import { GoogleReviews } from "react-elfsight-reviews";


export default function ResenasGoogle() {
  const widgetId = process.env.NEXT_PUBLIC_ELFSIGHT_WIDGET_ID;
  const widgetId2 = process.env.NEXT_PUBLIC_ELFSIGHT_WIDGET_ID2;
  const activeWidgetId = widgetId2 ?? widgetId;

  if (!activeWidgetId) {
    return (
      <p className="text-slate-400 text-sm">
        Las reseñas de Google no están disponibles en este momento. Por favor, intentá nuevamente más tarde.
      </p>
    );
  }

  return (
    <div className="w-full">
      <GoogleReviews id={activeWidgetId} />
    </div>
  );
}