import React, { useState, Suspense } from "react";

const LazyKanban = React.lazy(() => import("./Kanban"));
const LazyListView = React.lazy(() => import("./ListView"));
import Menu from "./Menu";

const BoardIndex = () => {
  const [selectedView, setSelectedView] = useState("list");

  const handleViewChange = (view) => {
    setSelectedView(view);
  };

  return (
    <div className="w-full h-screen bg-white border rounded flex flex-col">
      <h1 className="mt-8 text-2xl font-semibold mx-14">327 Applications</h1>
      <div className="mx-14">
        <Menu onViewChange={handleViewChange} />
      </div>
      <div className="flex-1 mt-4 overflow-auto">
        <Suspense fallback={<div>Loading...</div>}>
          {selectedView === "list" ? (
            <LazyListView />
          ) : (
            <LazyKanban openSideModal={openSideModal} pageId={id} />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default BoardIndex;
