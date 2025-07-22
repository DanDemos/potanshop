import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/configureStore";
import React, { useEffect } from "react";

interface LoadingComponentProps {
  loadingGroup: string | number;
  loadingDesign: React.ReactNode;
  children: React.ReactNode;
  type?: "remount" | "hide";
}

function LoadingComponent({
  loadingGroup,
  loadingDesign,
  children,
  type = "remount",
}: LoadingComponentProps): React.ReactNode {
  const isLoading = useSelector(
    (state: RootState) => state.loading?.[loadingGroup]
  );

  // useEffect(() => {
  //   console.log(`Loading:${isLoading === undefined ? false : true}`, loadingGroup);
  // }, [isLoading])
  
  if (type === "remount") {
    return isLoading === undefined
      ? children
      : loadingDesign || <h1>It is Loading! Baka!</h1>;
  } else if (type === "hide") {
    return (
      <div>
        <div style={{ display: isLoading === undefined ? "none" : "block" }}>
          {loadingDesign || <h1>It is Loading! Baka!</h1>}
        </div>

        <div style={{ display: isLoading === undefined ? "block" : "none" }}>
          {children}
        </div>
      </div>
    );
  } else {
    console.error(`type does not support ${type}`);
    return <></>;
  }
}

export default LoadingComponent;
