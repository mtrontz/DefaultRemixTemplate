import React, { useState } from "react";
import SidebarComponent from "~/components/SidebarLayoutComponents/SidebarComponent";
import NavigationComponent from "~/components/SidebarLayoutComponents/NavigationComponent";
interface DemoLayoutProps {
    children: React.ReactNode
}
export default function SidebarLayout({children}: {
    children: React.ReactNode
}) {

    return (
<>
    <div className="w-full h-full bg-gray-200">
        <div className="flex flex-no-wrap">
            {/* Sidebar starts */}
            <SidebarComponent />
            {/* Sidebar ends */}
            <div className="w-full">
                {/* Navigation starts */}
                <NavigationComponent />
                {/* Navigation ends */}
                {/* Remove class [ h-64 ] when adding a card block */}
                <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                        {/* Place your content here */}
                        { children }
                        </div>
                </div>
            </div>
        </div>
    </div>
</>
    );
}
