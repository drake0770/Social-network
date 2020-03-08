import React from "react";

export const withSuspense = (Component)=>{
    return() => {
        return <React.Suspense fallback={<div>Loading...</div>}>
        <Component/>
    </React.Suspense>}
}