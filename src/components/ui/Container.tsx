import { ReactNode } from "react";
type TChildrenProp={
    children:ReactNode
}
const Container = ({children}:TChildrenProp) => {
    return (
        <div className="h-screen w-full max-w-7xl mx-auto">
           {children} 
        </div>
    );
};

export default Container;