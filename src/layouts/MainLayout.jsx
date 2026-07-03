import React from "react";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="flex h-screen w-screen overflow-hidden bg-surface-bg antialiased">
            {/* Left Navigation Block */}
            <Sidebar />

            {/* Right Workplace Content Canvas */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Top Control Header */}
                <Navbar />

                {/* Central Display Surface for Sub-Pages */}
                <main className="flex-1 overflow-y-auto p-8">
                <div className="max-w-7xl mx-auto w-full h-full">
                    <Outlet />
                </div>
                </main>

                {/* Bottom Platform Metric Footer */}
                <Footer />
            </div>
        </div>
    );

}