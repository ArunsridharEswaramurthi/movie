(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar({ currentTab, setCurrentTab, searchQuery, setSearchQuery, searchResults, setSearchResults, tmdbApiKey, onSelectVideo }) {
    _s();
    const [dropdownVisible, setDropdownVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchBoxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            function handleClickOutside(event) {
                if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                    setDropdownVisible(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleSearchInput = (e)=>{
        const val = e.target.value;
        setSearchQuery(val);
        if (val.trim()) {
            setDropdownVisible(true);
        } else {
            setDropdownVisible(false);
            setSearchResults([]);
        }
    };
    const highlightMatch = (text, query)=>{
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: parts.map((part, i)=>part.toLowerCase() === query.toLowerCase() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--primary)",
                        fontWeight: "700"
                    },
                    children: part
                }, i, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 49,
                    columnNumber: 13
                }, this) : part)
        }, void 0, false, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "app-navbar",
        id: "app-navbar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "navbar-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "brand",
                            onClick: ()=>setCurrentTab("dashboard"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "brand-icon",
                                    children: "🎬"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "brand-text",
                                    children: [
                                        "Vidking",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "brand-accent",
                                            children: "Anime"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 64,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "navbar-nav",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: `nav-item ${currentTab === "dashboard" ? "active" : ""}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setCurrentTab("dashboard");
                                    },
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: `nav-item ${currentTab === "videos" ? "active" : ""}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setCurrentTab("videos");
                                    },
                                    children: "Explore"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: `nav-item ${currentTab === "settings" ? "active" : ""}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setCurrentTab("settings");
                                    },
                                    children: "Settings"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar-right",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-box",
                        ref: searchBoxRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "search-svg-icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "search-input",
                                className: "search-input",
                                placeholder: "Search One Piece & Demon Slayer...",
                                value: searchQuery,
                                onChange: handleSearchInput,
                                onFocus: ()=>searchQuery.trim() && setDropdownVisible(true),
                                autoComplete: "off"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            dropdownVisible && searchQuery.trim().length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "search-results-dropdown",
                                id: "search-results-dropdown",
                                children: [
                                    searchResults.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "search-no-results",
                                        children: "No matches found"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this) : searchResults.map((v)=>{
                                        const typeLabel = v.type === "tv" ? "TV" : "Movie";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "search-result-item",
                                            onClick: ()=>{
                                                setDropdownVisible(false);
                                                setSearchQuery("");
                                                onSelectVideo(v);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: v.poster || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='56'><rect width='40' height='56' fill='%231a1a2e'/><text x='20' y='32' font-size='16' text-anchor='middle'>🎬</text></svg>",
                                                    alt: v.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 121,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "search-result-info",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "search-result-title",
                                                            children: highlightMatch(v.title, searchQuery)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 126,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "search-result-meta",
                                                            children: [
                                                                typeLabel,
                                                                " · ",
                                                                v.year,
                                                                " · ⭐ ",
                                                                v.rating
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 129,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 125,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, `${v.type}-${v.id}`, true, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 112,
                                            columnNumber: 23
                                        }, this);
                                    }),
                                    !tmdbApiKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "search-dropdown-tip",
                                        children: [
                                            "🔑 Set a ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    setDropdownVisible(false);
                                                    setCurrentTab("settings");
                                                },
                                                children: "TMDb API Key"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navbar.js",
                                                lineNumber: 139,
                                                columnNumber: 30
                                            }, this),
                                            " in Settings to search millions of titles."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Navbar.js",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.js",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Navbar, "uz+9cX4c/oSaON0E1mMG2uEw8Do=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeroCarousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroCarousel({ items, onSelectVideo }) {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const carouselItems = items.slice(0, 5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCarousel.useEffect": ()=>{
            if (isHovered) {
                if (timerRef.current) clearInterval(timerRef.current);
                return;
            }
            timerRef.current = setInterval({
                "HeroCarousel.useEffect": ()=>{
                    if (carouselItems.length > 0) {
                        setActiveIndex({
                            "HeroCarousel.useEffect": (prev)=>(prev + 1) % carouselItems.length
                        }["HeroCarousel.useEffect"]);
                    }
                }
            }["HeroCarousel.useEffect"], 7000);
            return ({
                "HeroCarousel.useEffect": ()=>{
                    if (timerRef.current) clearInterval(timerRef.current);
                }
            })["HeroCarousel.useEffect"];
        }
    }["HeroCarousel.useEffect"], [
        isHovered,
        carouselItems.length
    ]);
    const handlePrev = (e)=>{
        e.preventDefault();
        if (carouselItems.length > 0) {
            setActiveIndex((prev)=>(prev - 1 + carouselItems.length) % carouselItems.length);
        }
    };
    const handleNext = (e)=>{
        e.preventDefault();
        if (carouselItems.length > 0) {
            setActiveIndex((prev)=>(prev + 1) % carouselItems.length);
        }
    };
    if (carouselItems.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "carousel-wrapper",
        id: "carousel-wrapper",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "carousel-container",
            id: "hero-carousel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "carousel-slides",
                    style: {
                        transform: `translateX(-${activeIndex * 100}%)`
                    },
                    children: carouselItems.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "carousel-slide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: video.backdrop || video.poster,
                                    alt: video.title,
                                    style: {
                                        objectFit: "cover",
                                        objectPosition: "center 20%"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroCarousel.js",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "carousel-overlay",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "carousel-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "carousel-meta",
                                                children: [
                                                    video.genres && video.genres.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "carousel-genre-tag",
                                                            children: g
                                                        }, g, false, {
                                                            fileName: "[project]/src/components/HeroCarousel.js",
                                                            lineNumber: 69,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "carousel-rating",
                                                        children: [
                                                            "⭐ ",
                                                            video.rating
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HeroCarousel.js",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "carousel-year",
                                                        children: video.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HeroCarousel.js",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HeroCarousel.js",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "carousel-title",
                                                children: video.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroCarousel.js",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "carousel-desc",
                                                children: video.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroCarousel.js",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-primary watch-now-btn",
                                                onClick: ()=>onSelectVideo(video),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "▶"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HeroCarousel.js",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Watch Now"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HeroCarousel.js",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HeroCarousel.js",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroCarousel.js",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${video.type}-${video.id}`, true, {
                            fileName: "[project]/src/components/HeroCarousel.js",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroCarousel.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "carousel-control prev",
                    onClick: handlePrev,
                    "aria-label": "Previous Slide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
                        fileName: "[project]/src/components/HeroCarousel.js",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroCarousel.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "carousel-control next",
                    onClick: handleNext,
                    "aria-label": "Next Slide",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                        fileName: "[project]/src/components/HeroCarousel.js",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroCarousel.js",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "carousel-dots",
                    children: carouselItems.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `carousel-dot ${idx === activeIndex ? "active" : ""}`,
                            onClick: ()=>setActiveIndex(idx)
                        }, idx, false, {
                            fileName: "[project]/src/components/HeroCarousel.js",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroCarousel.js",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroCarousel.js",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeroCarousel.js",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(HeroCarousel, "i04UuPf6+GcjE22yx9vaznSHbJo=");
_c = HeroCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VideoCard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function VideoCard({ video, onSelectVideo }) {
    _s();
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const typeClass = video.type === "tv" ? "tv" : "movie";
    const typeLabel = video.type === "tv" ? "TV" : "Movie";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-card",
        onClick: ()=>onSelectVideo(video),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-img-container",
                children: [
                    imageError || !video.poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "linear-gradient(135deg,#1a1a2e,#0d0d1a)",
                            color: "#4b5563",
                            fontSize: "2.2rem"
                        },
                        children: "🎬"
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoCard.js",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: video.poster,
                        alt: video.title,
                        loading: "lazy",
                        onError: ()=>setImageError(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoCard.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-play-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "play-icon-glow",
                            children: "▶"
                        }, void 0, false, {
                            fileName: "[project]/src/components/VideoCard.js",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoCard.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VideoCard.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "card-rating",
                                children: [
                                    "⭐ ",
                                    video.rating
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/VideoCard.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `card-type-badge ${typeClass}`,
                                children: typeLabel
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoCard.js",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "card-year",
                                children: video.year
                            }, void 0, false, {
                                fileName: "[project]/src/components/VideoCard.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/VideoCard.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "card-title",
                        children: video.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoCard.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/VideoCard.js",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VideoCard.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(VideoCard, "gLR0P7wgc8ZXiun/rQPANvAzwwQ=");
_c = VideoCard;
var _c;
__turbopack_context__.k.register(_c, "VideoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DetailModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function DetailModal({ video, resumeOptions = {}, onClose, onPlay, tmdbApiKey }) {
    _s();
    const [colorText, setColorText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("6366f1");
    const [colorPicker, setColorPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#6366f1");
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoplay, setAutoplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [nextEpisode, setNextEpisode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [episodeSelector, setEpisodeSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [seasons, setSeasons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSeason, setSelectedSeason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [episodes, setEpisodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedEpisode, setSelectedEpisode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isLoadingSeasons, setIsLoadingSeasons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedServer, setSelectedServer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("vidking");
    // Sync color configurations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailModal.useEffect": ()=>{
            const savedColor = localStorage.getItem("vidking-player-color") || "6366f1";
            setColorText(savedColor);
            setColorPicker("#" + savedColor);
            setProgress(resumeOptions.progress || 0);
        }
    }["DetailModal.useEffect"], [
        resumeOptions
    ]);
    // Load TV Seasons dynamically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailModal.useEffect": ()=>{
            if (!video || video.type !== "tv") return;
            // Default fallbacks
            const defaultSeasons = video.seasons || [
                {
                    season: 1,
                    episodes: 10
                }
            ];
            setSeasons(defaultSeasons);
            const initialSeason = resumeOptions.season || (defaultSeasons[0]?.season === 0 && defaultSeasons.length > 1 ? defaultSeasons[1]?.season : defaultSeasons[0]?.season) || 1;
            setSelectedSeason(initialSeason);
            if (tmdbApiKey) {
                setIsLoadingSeasons(true);
                fetch(`/api/tmdb/tv/${video.id}`, {
                    headers: {
                        "x-tmdb-key": tmdbApiKey
                    }
                }).then({
                    "DetailModal.useEffect": (r)=>r.ok ? r.json() : Promise.reject()
                }["DetailModal.useEffect"]).then({
                    "DetailModal.useEffect": (data)=>{
                        if (data.seasons && data.seasons.length > 0) {
                            const list = data.seasons.map({
                                "DetailModal.useEffect.list": (s)=>({
                                        season: s.season_number,
                                        episodes: s.episode_count
                                    })
                            }["DetailModal.useEffect.list"]);
                            setSeasons(list);
                            const activeSeasonNum = resumeOptions.season || (list[0]?.season === 0 && list.length > 1 ? list[1]?.season : list[0]?.season) || 1;
                            setSelectedSeason(activeSeasonNum);
                        }
                    }
                }["DetailModal.useEffect"]).catch({
                    "DetailModal.useEffect": (e)=>console.error("Error fetching seasons from proxy:", e)
                }["DetailModal.useEffect"]).finally({
                    "DetailModal.useEffect": ()=>setIsLoadingSeasons(false)
                }["DetailModal.useEffect"]);
            }
        }
    }["DetailModal.useEffect"], [
        video,
        tmdbApiKey,
        resumeOptions
    ]);
    const EPISODES_PER_PAGE = 50;
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Reset page when season or seasons change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailModal.useEffect": ()=>{
            setActivePage(0);
        }
    }["DetailModal.useEffect"], [
        selectedSeason,
        seasons
    ]);
    // Adjust activePage to contain selectedEpisode if it's restored from resume options
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailModal.useEffect": ()=>{
            if (selectedEpisode && episodes.length > 0) {
                const epIdx = episodes.indexOf(selectedEpisode);
                if (epIdx !== -1) {
                    const pageIdx = Math.floor(epIdx / EPISODES_PER_PAGE);
                    setActivePage(pageIdx);
                }
            }
        }
    }["DetailModal.useEffect"], [
        selectedEpisode,
        episodes
    ]);
    // Populate episodes when selected season changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailModal.useEffect": ()=>{
            const s = seasons.find({
                "DetailModal.useEffect.s": (x)=>x.season == selectedSeason
            }["DetailModal.useEffect.s"]);
            const count = s ? s.episodes : 10;
            const list = [];
            for(let i = 1; i <= count; i++){
                list.push(i);
            }
            setEpisodes(list);
            // Default selected episode
            if (resumeOptions.season == selectedSeason && resumeOptions.episode) {
                setSelectedEpisode(resumeOptions.episode);
            } else {
                setSelectedEpisode(1);
            }
        }
    }["DetailModal.useEffect"], [
        selectedSeason,
        seasons,
        resumeOptions
    ]);
    const handleColorPickerChange = (e)=>{
        const hex = e.target.value.substring(1);
        setColorText(hex);
        setColorPicker(e.target.value);
        localStorage.setItem("vidking-player-color", hex);
    };
    const handleColorTextChange = (e)=>{
        const val = e.target.value.trim();
        setColorText(val);
        if (/^[0-9a-fA-F]{3,6}$/.test(val)) {
            setColorPicker("#" + (val.length === 3 ? val + val : val));
            localStorage.setItem("vidking-player-color", val);
        }
    };
    // Generate URL preview
    const generateEmbedUrl = ()=>{
        if (!video) return "";
        let url = "";
        if (selectedServer === "vidking") {
            const p = [];
            if (colorText.trim()) p.push(`color=${colorText.trim()}`);
            if (autoplay) p.push("autoPlay=true");
            if (progress > 0) p.push(`progress=${progress}`);
            if (video.type === "tv") {
                url = `https://www.vidking.net/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
                if (nextEpisode) p.push("nextEpisode=true");
                if (episodeSelector) p.push("episodeSelector=true");
            } else {
                url = `https://www.vidking.net/embed/movie/${video.id}`;
            }
            if (p.length) url += "?" + p.join("&");
        } else if (selectedServer === "vidsrc") {
            if (video.type === "tv") {
                url = `https://vidsrc.xyz/embed/tv/${video.id}/${selectedSeason}/${selectedEpisode}`;
            } else {
                url = `https://vidsrc.xyz/embed/movie/${video.id}`;
            }
        } else if (selectedServer === "superembed") {
            if (video.type === "tv") {
                url = `https://multiembed.to/embed.php?tmdb=1&id=${video.id}&s=${selectedSeason}&e=${selectedEpisode}`;
            } else {
                url = `https://multiembed.to/embed.php?tmdb=1&id=${video.id}`;
            }
        }
        return url;
    };
    const handleCopy = ()=>{
        const url = generateEmbedUrl();
        navigator.clipboard.writeText(url).then(()=>{
            showCopyToast();
        }).catch(()=>{
            // Fallback
            const ta = document.createElement("textarea");
            ta.value = url;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            ta.remove();
            showCopyToast();
        });
    };
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const showCopyToast = ()=>{
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    if (!video) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        onClick: (e)=>e.target.classList.contains("modal-overlay") && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-card glass-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "modal-close-btn",
                    onClick: onClose,
                    "aria-label": "Close Modal",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/DetailModal.js",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-poster-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: video.poster,
                                        alt: video.title,
                                        className: "modal-poster-img"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailModal.js",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-quick-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-rating-badge",
                                            children: [
                                                "⭐ ",
                                                video.rating
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DetailModal.js",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-year-badge",
                                            children: video.year
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailModal.js",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "modal-type-badge",
                                            children: video.type === "tv" ? "TV Show" : "Movie"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailModal.js",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "modal-genres-list",
                                    children: video.genres && video.genres.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "carousel-genre-tag",
                                            children: g
                                        }, g, false, {
                                            fileName: "[project]/src/components/DetailModal.js",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DetailModal.js",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "modal-title",
                                    children: video.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-desc",
                                    children: video.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "player-config-title",
                                    children: "Player Configuration"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 209,
                                    columnNumber: 24
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "config-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            style: {
                                                marginBottom: "6px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-label",
                                                    children: "Select Playback Server"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "server-tabs-container",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `server-tab-btn ${selectedServer === "vidking" ? "active" : ""}`,
                                                            onClick: ()=>setSelectedServer("vidking"),
                                                            children: "VidKing (Primary)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 215,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `server-tab-btn ${selectedServer === "vidsrc" ? "active" : ""}`,
                                                            onClick: ()=>setSelectedServer("vidsrc"),
                                                            children: "Vidsrc (Backup)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 222,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: `server-tab-btn ${selectedServer === "superembed" ? "active" : ""}`,
                                                            onClick: ()=>setSelectedServer("superembed"),
                                                            children: "SuperEmbed (Alt)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 229,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DetailModal.js",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        selectedServer === "vidking" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Player Theme Color (Hex)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "color-picker-wrapper",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "color",
                                                                    value: colorPicker,
                                                                    onChange: handleColorPickerChange,
                                                                    className: "color-picker-input"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/DetailModal.js",
                                                                    lineNumber: 244,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: colorText,
                                                                    onChange: handleColorTextChange,
                                                                    placeholder: "e50914",
                                                                    className: "form-input color-text-input"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/DetailModal.js",
                                                                    lineNumber: 250,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 243,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Start Time (seconds)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 261,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: progress,
                                                            onChange: (e)=>setProgress(parseInt(e.target.value) || 0),
                                                            min: "0",
                                                            placeholder: "e.g. 120",
                                                            className: "form-input"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "checkbox-row",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "checkbox-label",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: autoplay,
                                                                onChange: (e)=>setAutoplay(e.target.checked)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailModal.js",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, this),
                                                            " Autoplay"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailModal.js",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        video.type === "tv" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tv-only-settings",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: "12px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Select Season"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 287,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "season-tabs-container",
                                                            children: seasons.map((s)=>{
                                                                if (s.season === 0 && seasons.length > 1) return null;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `season-tab-btn ${selectedSeason === s.season ? "active" : ""}`,
                                                                    onClick: ()=>setSelectedSeason(s.season),
                                                                    disabled: isLoadingSeasons,
                                                                    children: [
                                                                        "Season ",
                                                                        s.season
                                                                    ]
                                                                }, s.season, true, {
                                                                    fileName: "[project]/src/components/DetailModal.js",
                                                                    lineNumber: 292,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 288,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    style: {
                                                        marginBottom: "12px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-label",
                                                            children: "Select Episode"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, this),
                                                        episodes.length > EPISODES_PER_PAGE && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "episode-pages-container",
                                                            children: Array.from({
                                                                length: Math.ceil(episodes.length / EPISODES_PER_PAGE)
                                                            }).map((_, idx)=>{
                                                                const start = idx * EPISODES_PER_PAGE + 1;
                                                                const end = Math.min((idx + 1) * EPISODES_PER_PAGE, episodes.length);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `episode-page-btn ${activePage === idx ? "active" : ""}`,
                                                                    onClick: ()=>setActivePage(idx),
                                                                    children: [
                                                                        start,
                                                                        "-",
                                                                        end
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/components/DetailModal.js",
                                                                    lineNumber: 314,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 309,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "episode-grid",
                                                            children: episodes.slice(activePage * EPISODES_PER_PAGE, (activePage + 1) * EPISODES_PER_PAGE).map((ep)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `episode-pill ${selectedEpisode === ep ? "active" : ""}`,
                                                                    onClick: ()=>setSelectedEpisode(ep),
                                                                    children: ep
                                                                }, ep, false, {
                                                                    fileName: "[project]/src/components/DetailModal.js",
                                                                    lineNumber: 328,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 326,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, this),
                                                selectedServer === "vidking" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "checkbox-row",
                                                    style: {
                                                        marginTop: "12px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "checkbox-label",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: nextEpisode,
                                                                    onChange: (e)=>setNextEpisode(e.target.checked)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/DetailModal.js",
                                                                    lineNumber: 343,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Auto Next Episode"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 342,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "checkbox-label",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: episodeSelector,
                                                                    onChange: (e)=>setEpisodeSelector(e.target.checked)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/DetailModal.js",
                                                                    lineNumber: 350,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " Episode Selector"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/DetailModal.js",
                                                            lineNumber: 349,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 341,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DetailModal.js",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "preview-url-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "form-label",
                                            children: "Embed URL Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailModal.js",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "code-preview-box",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: generateEmbedUrl()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 365,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "copy-btn",
                                                    onClick: handleCopy,
                                                    children: copied ? "Copied!" : "Copy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DetailModal.js",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DetailModal.js",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary play-btn",
                                    onClick: ()=>onPlay(video.title, generateEmbedUrl()),
                                    children: "▶ Watch Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailModal.js",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DetailModal.js",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DetailModal.js",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DetailModal.js",
            lineNumber: 188,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DetailModal.js",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(DetailModal, "c/flcQbTXaDEjq001TTHZaI7+CQ=");
_c = DetailModal;
var _c;
__turbopack_context__.k.register(_c, "DetailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Settings({ siteId, setSiteId, tmdbApiKey, setTmdbApiKey, onSave, onQuickPlay }) {
    _s();
    const [localSiteId, setLocalSiteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [localApiKey, setLocalApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customId, setCustomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customMediaType, setCustomMediaType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("movie");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Settings.useEffect": ()=>{
            setLocalSiteId(siteId);
            setLocalApiKey(tmdbApiKey);
        }
    }["Settings.useEffect"], [
        siteId,
        tmdbApiKey
    ]);
    const handleSave = ()=>{
        onSave(localSiteId, localApiKey);
    };
    const handleQuickPlay = ()=>{
        const cleanId = customId.trim();
        if (!cleanId || isNaN(cleanId)) {
            alert("❌ Please enter a valid numerical TMDB ID");
            return;
        }
        onQuickPlay(parseInt(cleanId), customMediaType);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "tab-section active",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-card glass-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "settings-title",
                        children: "⚙️ Platform Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Settings.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "settings-description",
                        children: "Configure your streaming preferences and connection details."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Settings.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "settings-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "site-id-input",
                                        className: "form-label",
                                        children: "Vidking Site ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.js",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "site-id-input",
                                        placeholder: "Enter your Vidking Site ID",
                                        className: "form-input",
                                        value: localSiteId,
                                        onChange: (e)=>setLocalSiteId(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.js",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "form-help",
                                        children: "Enter the unique identifier associated with your Vidking API subscription."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.js",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "tmdb-api-key-input",
                                        className: "form-label",
                                        children: "TMDb API Key (Optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.js",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        id: "tmdb-api-key-input",
                                        placeholder: "Enter your TMDb API Key (v3)",
                                        className: "form-input",
                                        value: localApiKey,
                                        onChange: (e)=>setLocalApiKey(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Settings.js",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "form-help",
                                        children: [
                                            "Add your TMDb API key to search and browse millions of movies, TV shows, and anime. Get a free key at",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.themoviedb.org/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                    color: "var(--primary)",
                                                    textDecoration: "underline"
                                                },
                                                children: "themoviedb.org"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.js",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.js",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                onClick: handleSave,
                                children: "Save Configurations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.js",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Settings.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-card glass-card",
                style: {
                    marginTop: "30px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "settings-title",
                        children: "🚀 Instant Play by TMDB ID"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Settings.js",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "settings-description",
                        children: "Stream any anime movie or TV show directly by entering its TMDB ID."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Settings.js",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "settings-form",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "custom-tmdb-id",
                                                className: "form-label",
                                                children: "TMDB ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.js",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "custom-tmdb-id",
                                                placeholder: "e.g. 37854",
                                                className: "form-input",
                                                value: customId,
                                                onChange: (e)=>setCustomId(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.js",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.js",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        style: {
                                            width: "140px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "custom-media-type",
                                                className: "form-label",
                                                children: "Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Settings.js",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "custom-media-type",
                                                className: "form-input form-select",
                                                value: customMediaType,
                                                onChange: (e)=>setCustomMediaType(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "movie",
                                                        children: "Movie"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.js",
                                                        lineNumber: 110,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "tv",
                                                        children: "TV Show"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Settings.js",
                                                        lineNumber: 111,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Settings.js",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Settings.js",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Settings.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                onClick: handleQuickPlay,
                                children: "▶ Load and Play"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Settings.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Settings.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Settings.js",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Settings.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Settings, "FWtUYDvtxhNN9Zl+cakSENC3LLY=");
_c = Settings;
var _c;
__turbopack_context__.k.register(_c, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANIME_CATALOG",
    ()=>ANIME_CATALOG,
    "TMDB_GENRES",
    ()=>TMDB_GENRES,
    "getGenresFromIds",
    ()=>getGenresFromIds
]);
const ANIME_CATALOG = [
    // ===== ONE PIECE SERIES & MOVIES =====
    {
        id: 37854,
        title: "One Piece",
        type: "tv",
        poster: "https://image.tmdb.org/t/p/w500/x52v515gJaNqbv9uH6g563rOIu7.jpg",
        backdrop: "https://image.tmdb.org/t/p/w780/4t06sk225gV5Z224c6n78rOI7v.jpg",
        year: "1999",
        rating: "8.7",
        genres: [
            "Anime",
            "Action",
            "Adventure",
            "Fantasy"
        ],
        description: "Years ago, the legendary Pirate King Gol D. Roger was executed, leaving behind a massive treasure known as the 'One Piece'. Young Monkey D. Luffy sets sail with his crew, the Straw Hat Pirates, to find the treasure and become the new Pirate King.",
        seasons: [
            {
                season: 1,
                episodes: 1100
            }
        ] // Fallback value, will fetch actual episodes if API key is present
    },
    {
        id: 900667,
        title: "One Piece Film: Red",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/ogZTo54Gmg5p2dfz4FI1m1m5W5L.jpg",
        backdrop: "https://image.tmdb.org/t/p/w780/ogZTo54Gmg5p2dfz4FI1m1m5W5L.jpg",
        year: "2022",
        rating: "7.9",
        genres: [
            "Anime",
            "Animation",
            "Action",
            "Adventure",
            "Fantasy"
        ],
        description: "Uta — the most beloved singer in the world. Her voice, which she sings with while concealing her true identity, has been described as 'otherworldly'. She will appear in public for the first time at a live concert."
    },
    {
        id: 568012,
        title: "One Piece: Stampede",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/d6A3Xv9b27OI9gKzQcRSR85r71n.jpg",
        backdrop: "https://image.tmdb.org/t/p/w780/d6A3Xv9b27OI9gKzQcRSR85r71n.jpg",
        year: "2019",
        rating: "8.0",
        genres: [
            "Anime",
            "Animation",
            "Action",
            "Adventure"
        ],
        description: "Luffy and his Straw Hat Pirate Crew receive an invitation to the Pirate Festival, a massive world expo of pirates, by pirates, for pirates."
    },
    {
        id: 361292,
        title: "One Piece Film: Gold",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/8404K9b3H8w6b6w9H8w8B9w8H8.jpg",
        backdrop: "https://image.tmdb.org/t/p/w780/8404K9b3H8w6b6w9H8w8B9w8H8.jpg",
        year: "2016",
        rating: "7.4",
        genres: [
            "Anime",
            "Animation",
            "Action",
            "Adventure",
            "Fantasy"
        ],
        description: "The Straw Hat Pirates arrive at Gran Tesoro, a massive independent entertainment city-ship ruled by the wealthy Gild Tesoro."
    },
    // ===== DEMON SLAYER SERIES & MOVIES =====
    {
        id: 85937,
        title: "Demon Slayer: Kimetsu no Yaiba",
        type: "tv",
        poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
        backdrop: "https://image.tmdb.org/t/p/w780/nTvM0mhUrnN2v34VzLV6Kj17uEv.jpg",
        year: "2019",
        rating: "8.7",
        genres: [
            "Anime",
            "Animation",
            "Action",
            "Adventure",
            "Fantasy"
        ],
        description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. Tanjiro resolves to become a 'demon slayer' so that he can turn his sister back into a human.",
        seasons: [
            {
                season: 1,
                episodes: 26
            },
            {
                season: 2,
                episodes: 18
            },
            {
                season: 3,
                episodes: 11
            },
            {
                season: 4,
                episodes: 8
            }
        ]
    },
    {
        id: 635302,
        title: "Demon Slayer: Mugen Train",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/h8g63wL9tPk5z17lVx7EeSgj7io.jpg",
        backdrop: "https://image.tmdb.org/t/p/w780/h8g63wL9tPk5z17lVx7EeSgj7io.jpg",
        year: "2020",
        rating: "8.4",
        genres: [
            "Anime",
            "Animation",
            "Action",
            "Fantasy"
        ],
        description: "Tanjirō Kamado and his companions from the Demon Slayer Corps accompany Kyōjurō Rengoku, the Flame Hashira, to investigate a mysterious series of disappearances aboard a train."
    },
    {
        id: 1216221,
        title: "Demon Slayer: To the Hashira Training",
        type: "movie",
        poster: "https://image.tmdb.org/t/p/w500/x5Zp9m1Nl8Wb9U5R0N0sO4Z1D7B.jpg",
        backdrop: "https://image.tmdb.org/t/p/w780/x5Zp9m1Nl8Wb9U5R0N0sO4Z1D7B.jpg",
        year: "2024",
        rating: "7.7",
        genres: [
            "Anime",
            "Animation",
            "Action",
            "Fantasy"
        ],
        description: "A theatrical compilation featuring Episode 11 of the Swordsmith Village Arc and Episode 1 of the Hashira Training Arc."
    }
];
const TMDB_GENRES = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics"
};
function getGenresFromIds(ids, originCountries = []) {
    if (!ids || !ids.length) return [
        "Unknown"
    ];
    const list = ids.map((id)=>TMDB_GENRES[id]).filter(Boolean);
    if (ids.includes(16) && originCountries && originCountries.some((c)=>c === 'JP')) {
        if (!list.includes("Anime")) list.push("Anime");
    }
    return list.length ? list : [
        "Generic"
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroCarousel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VideoCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DetailModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Settings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Home() {
    _s();
    const [currentTab, setCurrentTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [siteId, setSiteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("12345");
    const [tmdbApiKey, setTmdbApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("44531997758615c4af0f1d7724b5819d");
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIME_CATALOG"]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchDebounce, setSearchDebounce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentCategory, setCurrentCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [activeVideo, setActiveVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resumeOptions, setResumeOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [playingVideo, setPlayingVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // { title, url, themeColor }
    const [continueWatching, setContinueWatching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Dynamic global catalog shelving states
    const [trendingMovies, setTrendingMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [trendingTVShows, setTrendingTVShows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [trendingAnime, setTrendingAnime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const playerSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize configurations from local storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const savedSiteId = localStorage.getItem("vidking-site-id") || "12345";
            const savedApiKey = localStorage.getItem("vidking-tmdb-key") || "44531997758615c4af0f1d7724b5819d";
            setSiteId(savedSiteId);
            setTmdbApiKey(savedApiKey);
            loadContinueWatching();
        }
    }["Home.useEffect"], []);
    // Set up message listener for watch progress events from iframe
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            function handleMessage(event) {
                try {
                    const payload = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
                    if (payload?.type === "PLAYER_EVENT" && payload.data) {
                        const progressData = {
                            ...payload.data,
                            mediaType: activeVideo?.type || payload.data.mediaType || "movie",
                            timestamp: Date.now()
                        };
                        localStorage.setItem(`progress-${payload.data.id}`, JSON.stringify(progressData));
                        loadContinueWatching();
                    }
                } catch (e) {
                // Non-JSON message, ignore
                }
            }
            window.addEventListener("message", handleMessage);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("message", handleMessage)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        activeVideo
    ]);
    // Load Continue Watching lists from local storage
    const loadContinueWatching = ()=>{
        const history = [];
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if (key.startsWith("progress-")) {
                try {
                    const d = JSON.parse(localStorage.getItem(key));
                    if (d && d.id) history.push(d);
                } catch (e) {}
            }
        }
        history.sort((a, b)=>(b.timestamp || 0) - (a.timestamp || 0));
        setContinueWatching(history);
    };
    // Fetch dynamic catalog shelves if TMDb API key is set
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!tmdbApiKey) {
                setVideos(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIME_CATALOG"]);
                setTrendingMovies([]);
                setTrendingTVShows([]);
                setTrendingAnime([]);
                return;
            }
            const fetchDynamicCatalog = {
                "Home.useEffect.fetchDynamicCatalog": async ()=>{
                    try {
                        const headers = {
                            "x-tmdb-key": tmdbApiKey
                        };
                        // Fetch One Piece Movies and Demon Slayer Movies
                        const opMoviesPromise = fetch("/api/tmdb/search/movie?query=One Piece", {
                            headers
                        }).then({
                            "Home.useEffect.fetchDynamicCatalog.opMoviesPromise": (r)=>r.ok ? r.json() : null
                        }["Home.useEffect.fetchDynamicCatalog.opMoviesPromise"]);
                        const dsMoviesPromise = fetch("/api/tmdb/search/movie?query=Demon Slayer", {
                            headers
                        }).then({
                            "Home.useEffect.fetchDynamicCatalog.dsMoviesPromise": (r)=>r.ok ? r.json() : null
                        }["Home.useEffect.fetchDynamicCatalog.dsMoviesPromise"]);
                        // Fetch updated details for One Piece and Demon Slayer series
                        const opTvPromise = fetch("/api/tmdb/tv/37854", {
                            headers
                        }).then({
                            "Home.useEffect.fetchDynamicCatalog.opTvPromise": (r)=>r.ok ? r.json() : null
                        }["Home.useEffect.fetchDynamicCatalog.opTvPromise"]);
                        const dsTvPromise = fetch("/api/tmdb/tv/85937", {
                            headers
                        }).then({
                            "Home.useEffect.fetchDynamicCatalog.dsTvPromise": (r)=>r.ok ? r.json() : null
                        }["Home.useEffect.fetchDynamicCatalog.dsTvPromise"]);
                        // Fetch Global Trending/Popular Shelves
                        const trendingMoviesPromise = fetch("/api/tmdb/trending/movie/week", {
                            headers
                        }).then({
                            "Home.useEffect.fetchDynamicCatalog.trendingMoviesPromise": (r)=>r.ok ? r.json() : null
                        }["Home.useEffect.fetchDynamicCatalog.trendingMoviesPromise"]);
                        const trendingTVShowsPromise = fetch("/api/tmdb/trending/tv/week", {
                            headers
                        }).then({
                            "Home.useEffect.fetchDynamicCatalog.trendingTVShowsPromise": (r)=>r.ok ? r.json() : null
                        }["Home.useEffect.fetchDynamicCatalog.trendingTVShowsPromise"]);
                        const trendingAnimePromise = fetch("/api/tmdb/discover/tv?with_genres=16&with_original_language=ja&sort_by=popularity.desc", {
                            headers
                        }).then({
                            "Home.useEffect.fetchDynamicCatalog.trendingAnimePromise": (r)=>r.ok ? r.json() : null
                        }["Home.useEffect.fetchDynamicCatalog.trendingAnimePromise"]);
                        const [opMoviesData, dsMoviesData, opTvData, dsTvData, trendingMoviesData, trendingTVShowsData, trendingAnimeData] = await Promise.all([
                            opMoviesPromise,
                            dsMoviesPromise,
                            opTvPromise,
                            dsTvPromise,
                            trendingMoviesPromise,
                            trendingTVShowsPromise,
                            trendingAnimePromise
                        ]);
                        let list = [
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIME_CATALOG"]
                        ];
                        // Helper to upsert a movie or show to our catalog
                        const upsertItem = {
                            "Home.useEffect.fetchDynamicCatalog.upsertItem": (newItem)=>{
                                const index = list.findIndex({
                                    "Home.useEffect.fetchDynamicCatalog.upsertItem.index": (item)=>item.id === newItem.id && item.type === newItem.type
                                }["Home.useEffect.fetchDynamicCatalog.upsertItem.index"]);
                                if (index !== -1) {
                                    list[index] = {
                                        ...list[index],
                                        ...newItem
                                    };
                                } else {
                                    list.push(newItem);
                                }
                            }
                        }["Home.useEffect.fetchDynamicCatalog.upsertItem"];
                        const mapTmdbs = {
                            "Home.useEffect.fetchDynamicCatalog.mapTmdbs": (item, mediaType)=>({
                                    id: item.id,
                                    title: item.title || item.name,
                                    type: mediaType || item.media_type || (item.title ? "movie" : "tv"),
                                    poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
                                    backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
                                    year: (item.release_date || item.first_air_date || "").substring(0, 4) || "N/A",
                                    rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
                                    genres: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGenresFromIds"])(item.genre_ids, item.origin_country || []),
                                    description: item.overview || "No description available."
                                })
                        }["Home.useEffect.fetchDynamicCatalog.mapTmdbs"];
                        if (opTvData) {
                            upsertItem({
                                id: opTvData.id,
                                title: opTvData.name,
                                type: "tv",
                                poster: opTvData.poster_path ? `https://image.tmdb.org/t/p/w500${opTvData.poster_path}` : list[0].poster,
                                backdrop: opTvData.backdrop_path ? `https://image.tmdb.org/t/p/w780${opTvData.backdrop_path}` : list[0].backdrop,
                                year: (opTvData.first_air_date || "").substring(0, 4) || "1999",
                                rating: opTvData.vote_average ? opTvData.vote_average.toFixed(1) : "8.7",
                                genres: opTvData.genres ? opTvData.genres.map({
                                    "Home.useEffect.fetchDynamicCatalog": (g)=>g.name
                                }["Home.useEffect.fetchDynamicCatalog"]) : [
                                    "Anime",
                                    "Action"
                                ],
                                description: opTvData.overview || opTvData.description
                            });
                        }
                        if (dsTvData) {
                            upsertItem({
                                id: dsTvData.id,
                                title: dsTvData.name,
                                type: "tv",
                                poster: dsTvData.poster_path ? `https://image.tmdb.org/t/p/w500${dsTvData.poster_path}` : list[4].poster,
                                backdrop: dsTvData.backdrop_path ? `https://image.tmdb.org/t/p/w780${dsTvData.backdrop_path}` : list[4].backdrop,
                                year: (dsTvData.first_air_date || "").substring(0, 4) || "2019",
                                rating: dsTvData.vote_average ? dsTvData.vote_average.toFixed(1) : "8.7",
                                genres: dsTvData.genres ? dsTvData.genres.map({
                                    "Home.useEffect.fetchDynamicCatalog": (g)=>g.name
                                }["Home.useEffect.fetchDynamicCatalog"]) : [
                                    "Anime",
                                    "Action"
                                ],
                                description: dsTvData.overview || dsTvData.description
                            });
                        }
                        if (opMoviesData?.results) {
                            opMoviesData.results.filter({
                                "Home.useEffect.fetchDynamicCatalog": (m)=>m.title.toLowerCase().includes("one piece")
                            }["Home.useEffect.fetchDynamicCatalog"]).forEach({
                                "Home.useEffect.fetchDynamicCatalog": (m)=>upsertItem(mapTmdbs(m, "movie"))
                            }["Home.useEffect.fetchDynamicCatalog"]);
                        }
                        if (dsMoviesData?.results) {
                            dsMoviesData.results.filter({
                                "Home.useEffect.fetchDynamicCatalog": (m)=>m.title.toLowerCase().includes("demon slayer") || m.title.toLowerCase().includes("kimetsu")
                            }["Home.useEffect.fetchDynamicCatalog"]).forEach({
                                "Home.useEffect.fetchDynamicCatalog": (m)=>upsertItem(mapTmdbs(m, "movie"))
                            }["Home.useEffect.fetchDynamicCatalog"]);
                        }
                        // Map and save dynamic shelves
                        if (trendingMoviesData?.results) {
                            const mappedMovies = trendingMoviesData.results.map({
                                "Home.useEffect.fetchDynamicCatalog.mappedMovies": (m)=>mapTmdbs(m, "movie")
                            }["Home.useEffect.fetchDynamicCatalog.mappedMovies"]);
                            setTrendingMovies(mappedMovies);
                            mappedMovies.forEach({
                                "Home.useEffect.fetchDynamicCatalog": (m)=>upsertItem(m)
                            }["Home.useEffect.fetchDynamicCatalog"]);
                        }
                        if (trendingTVShowsData?.results) {
                            const mappedTV = trendingTVShowsData.results.map({
                                "Home.useEffect.fetchDynamicCatalog.mappedTV": (t)=>mapTmdbs(t, "tv")
                            }["Home.useEffect.fetchDynamicCatalog.mappedTV"]);
                            setTrendingTVShows(mappedTV);
                            mappedTV.forEach({
                                "Home.useEffect.fetchDynamicCatalog": (t)=>upsertItem(t)
                            }["Home.useEffect.fetchDynamicCatalog"]);
                        }
                        if (trendingAnimeData?.results) {
                            const mappedAnime = trendingAnimeData.results.map({
                                "Home.useEffect.fetchDynamicCatalog.mappedAnime": (a)=>mapTmdbs(a, "tv")
                            }["Home.useEffect.fetchDynamicCatalog.mappedAnime"]);
                            setTrendingAnime(mappedAnime);
                            mappedAnime.forEach({
                                "Home.useEffect.fetchDynamicCatalog": (a)=>upsertItem(a)
                            }["Home.useEffect.fetchDynamicCatalog"]);
                        }
                        setVideos(list);
                    } catch (e) {
                        console.error("Error fetching dynamic layout:", e);
                    }
                }
            }["Home.useEffect.fetchDynamicCatalog"];
            fetchDynamicCatalog();
        }
    }["Home.useEffect"], [
        tmdbApiKey
    ]);
    // Debounced search trigger queries TMDb if key is configured
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (searchDebounce) clearTimeout(searchDebounce);
            if (!searchQuery.trim()) {
                setSearchResults([]);
                return;
            }
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    // Auto redirect search query to Explore tab
                    setCurrentTab("videos");
                    setCurrentCategory("All");
                    // Local matching first
                    const localResults = videos.filter({
                        "Home.useEffect.timer.localResults": (v)=>v.title.toLowerCase().includes(searchQuery.toLowerCase()) || v.description.toLowerCase().includes(searchQuery.toLowerCase())
                    }["Home.useEffect.timer.localResults"]);
                    if (tmdbApiKey) {
                        fetch(`/api/tmdb/search/multi?query=${encodeURIComponent(searchQuery)}&include_adult=false`, {
                            headers: {
                                "x-tmdb-key": tmdbApiKey
                            }
                        }).then({
                            "Home.useEffect.timer": (r)=>r.ok ? r.json() : null
                        }["Home.useEffect.timer"]).then({
                            "Home.useEffect.timer": (data)=>{
                                if (data?.results) {
                                    const tmdbResults = data.results.filter({
                                        "Home.useEffect.timer.tmdbResults": (item)=>item.media_type === "movie" || item.media_type === "tv"
                                    }["Home.useEffect.timer.tmdbResults"]).map({
                                        "Home.useEffect.timer.tmdbResults": (item)=>({
                                                id: item.id,
                                                title: item.title || item.name,
                                                type: item.media_type,
                                                poster: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
                                                backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
                                                year: (item.release_date || item.first_air_date || "").substring(0, 4) || "N/A",
                                                rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
                                                genres: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGenresFromIds"])(item.genre_ids, item.origin_country),
                                                description: item.overview || "No description available."
                                            })
                                    }["Home.useEffect.timer.tmdbResults"]);
                                    const merged = [
                                        ...localResults
                                    ];
                                    tmdbResults.forEach({
                                        "Home.useEffect.timer": (t)=>{
                                            if (!merged.some({
                                                "Home.useEffect.timer": (l)=>l.id === t.id && l.type === t.type
                                            }["Home.useEffect.timer"])) {
                                                merged.push(t);
                                            }
                                        }
                                    }["Home.useEffect.timer"]);
                                    setSearchResults(merged);
                                } else {
                                    setSearchResults(localResults);
                                }
                            }
                        }["Home.useEffect.timer"]).catch({
                            "Home.useEffect.timer": ()=>setSearchResults(localResults)
                        }["Home.useEffect.timer"]);
                    } else {
                        setSearchResults(localResults);
                    }
                }
            }["Home.useEffect.timer"], 300);
            setSearchDebounce(timer);
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        searchQuery,
        videos,
        tmdbApiKey
    ]);
    const showToastNotification = (msg)=>{
        setToast(msg);
        setTimeout(()=>{
            setToast("");
        }, 3000);
    };
    const handleSaveSettings = (newSiteId, newApiKey)=>{
        setSiteId(newSiteId);
        setTmdbApiKey(newApiKey);
        showToastNotification("✅ Configurations saved successfully!");
    };
    const handleQuickPlay = async (tmdbId, mediaType)=>{
        // Attempt to resolve custom metadata from state or API
        let item = videos.find((v)=>v.id === tmdbId && v.type === mediaType);
        if (!item) {
            item = {
                id: tmdbId,
                title: `Custom Play (${tmdbId})`,
                type: mediaType,
                poster: "",
                backdrop: "",
                year: "N/A",
                rating: "N/A",
                genres: [
                    "Custom"
                ],
                description: `Streaming TMDB ID ${tmdbId} via Vidking player.`
            };
            setVideos((prev)=>[
                    ...prev,
                    item
                ]);
        }
        setActiveVideo(item);
        setResumeOptions({});
    };
    const handlePlayNow = (title, url)=>{
        const color = localStorage.getItem("vidking-player-color") || "6366f1";
        setPlayingVideo({
            title,
            url,
            themeColor: `#${color}`
        });
        setActiveVideo(null);
        setTimeout(()=>{
            if (playerSectionRef.current) {
                playerSectionRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }, 100);
    };
    const handleClosePlayer = ()=>{
        setPlayingVideo(null);
    };
    // Helper to fetch details of dynamic bookmarks
    const getBookmarkMetadata = (h)=>{
        const meta = videos.find((v)=>v.id === h.id && v.type === h.mediaType) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIME_CATALOG"].find((v)=>v.id === h.id && v.type === h.mediaType);
        if (meta) return meta;
        return {
            id: h.id,
            title: `ID: ${h.id}`,
            poster: "",
            type: h.mediaType || "movie"
        };
    };
    // Filter explore catalog by category pill
    const getExploreList = ()=>{
        let list = videos;
        if (searchQuery.trim()) {
            list = searchResults;
        }
        if (currentCategory === "Movies") {
            return list.filter((v)=>v.type === "movie");
        } else if (currentCategory === "TV Shows") {
            return list.filter((v)=>v.type === "tv");
        } else if (currentCategory !== "All") {
            return list.filter((v)=>v.genres && v.genres.includes(currentCategory));
        }
        return list;
    };
    // Define dynamic Explore categories
    const categoriesList = [
        "All",
        "Movies",
        "TV Shows",
        "Anime",
        "Action",
        "Adventure",
        "Fantasy"
    ];
    //Curate lists for shelves
    const onePieceTV = videos.filter((v)=>v.id === 37854);
    const onePieceMovies = videos.filter((v)=>v.type === "movie" && v.title.toLowerCase().includes("one piece"));
    const demonSlayerTV = videos.filter((v)=>v.id === 85937);
    const demonSlayerMovies = videos.filter((v)=>v.type === "movie" && (v.title.toLowerCase().includes("demon slayer") || v.title.toLowerCase().includes("kimetsu")));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "var(--bg-dark)",
            color: "var(--text-primary)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                currentTab: currentTab,
                setCurrentTab: setCurrentTab,
                searchQuery: searchQuery,
                setSearchQuery: setSearchQuery,
                searchResults: searchResults,
                setSearchResults: setSearchResults,
                tmdbApiKey: tmdbApiKey,
                onSelectVideo: (video)=>{
                    setActiveVideo(video);
                    setResumeOptions({});
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            playingVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "player-theater-backdrop",
                        onClick: handleClosePlayer
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "player-section",
                        className: "player-section",
                        ref: playerSectionRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "player-container",
                            style: {
                                "--ambient-color": playingVideo.themeColor || "var(--primary)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "player-ambient-aura"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 396,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "player-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "player-meta-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "now-playing-tag",
                                                    children: "NOW PLAYING"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 400,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    id: "player-title",
                                                    children: playingVideo.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 401,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            id: "close-player-btn",
                                            className: "close-player-btn",
                                            onClick: handleClosePlayer,
                                            "aria-label": "Close Player",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "player-iframe-wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "vidking-container",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            id: "vidking-embed",
                                            src: playingVideo.url,
                                            allow: "autoplay; fullscreen",
                                            allowFullScreen: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 414,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 413,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "main-content",
                style: {
                    paddingBottom: "40px"
                },
                children: [
                    currentTab === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tab-section active",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: videos.filter((v)=>v.id === 37854 || v.id === 85937 || v.id === 900667 || v.id === 635302),
                                onSelectVideo: (video)=>{
                                    setActiveVideo(video);
                                    setResumeOptions({});
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 435,
                                columnNumber: 13
                            }, this),
                            continueWatching.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "home-shelf",
                                id: "continue-watching-shelf",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "shelf-title",
                                        children: "Continue Watching"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "horizontal-scroll",
                                        children: continueWatching.map((h)=>{
                                            const meta = getBookmarkMetadata(h);
                                            const percent = Math.min(100, Math.max(0, h.currentTime / (h.duration || 1) * 100));
                                            const subLabel = h.mediaType === "tv" || h.season ? `S${h.season} · Ep ${h.episode}` : "Movie";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "continue-card",
                                                onClick: ()=>{
                                                    setActiveVideo(meta);
                                                    setResumeOptions({
                                                        progress: Math.floor(h.currentTime || 0),
                                                        season: h.season,
                                                        episode: h.episode
                                                    });
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "continue-img-container",
                                                        children: [
                                                            meta.poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: meta.poster,
                                                                alt: meta.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.js",
                                                                lineNumber: 467,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: "absolute",
                                                                    inset: 0,
                                                                    background: "#111"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.js",
                                                                lineNumber: 469,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "continue-play-overlay",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "continue-play-icon",
                                                                    children: "▶"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 472,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.js",
                                                                lineNumber: 471,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "continue-progress-bar",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "continue-progress-fill",
                                                                    style: {
                                                                        width: `${percent}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.js",
                                                                    lineNumber: 475,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.js",
                                                                lineNumber: 474,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 465,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "continue-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "continue-title",
                                                                children: meta.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.js",
                                                                lineNumber: 479,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "continue-sub",
                                                                children: [
                                                                    subLabel,
                                                                    " · ",
                                                                    Math.floor((h.currentTime || 0) / 60),
                                                                    "m"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.js",
                                                                lineNumber: 480,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 478,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, `cw-${h.id}`, true, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 453,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 445,
                                columnNumber: 15
                            }, this),
                            onePieceTV.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "home-shelf",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "shelf-title",
                                        children: "🏴‍☠️ One Piece (TV Arcs & Series)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 492,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "horizontal-scroll",
                                        children: onePieceTV.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                video: v,
                                                onSelectVideo: (video)=>{
                                                    setActiveVideo(video);
                                                    setResumeOptions({});
                                                }
                                            }, `${v.type}-${v.id}`, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 495,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 493,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 491,
                                columnNumber: 15
                            }, this),
                            onePieceMovies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "home-shelf",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "shelf-title",
                                        children: "🎬 One Piece Films & Movies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 511,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "horizontal-scroll",
                                        children: onePieceMovies.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                video: v,
                                                onSelectVideo: (video)=>{
                                                    setActiveVideo(video);
                                                    setResumeOptions({});
                                                }
                                            }, `${v.type}-${v.id}`, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 514,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 512,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 510,
                                columnNumber: 15
                            }, this),
                            demonSlayerTV.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "home-shelf",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "shelf-title",
                                        children: "⚔️ Demon Slayer: Kimetsu no Yaiba"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 530,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "horizontal-scroll",
                                        children: demonSlayerTV.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                video: v,
                                                onSelectVideo: (video)=>{
                                                    setActiveVideo(video);
                                                    setResumeOptions({});
                                                }
                                            }, `${v.type}-${v.id}`, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 533,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 531,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 529,
                                columnNumber: 15
                            }, this),
                            demonSlayerMovies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "home-shelf",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "shelf-title",
                                        children: "🔥 Demon Slayer Movies & Specials"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 549,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "horizontal-scroll",
                                        children: demonSlayerMovies.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                video: v,
                                                onSelectVideo: (video)=>{
                                                    setActiveVideo(video);
                                                    setResumeOptions({});
                                                }
                                            }, `${v.type}-${v.id}`, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 552,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 550,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 548,
                                columnNumber: 15
                            }, this),
                            !tmdbApiKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tmdb-cta-card glass-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tmdb-cta-icon",
                                        children: "🔑"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 568,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "tmdb-cta-title",
                                        children: "Unlock Unlimited Movies & TV Shows"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 569,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "tmdb-cta-desc",
                                        children: "Connect your free TMDb (The Movie Database) account to search and stream millions of titles, discover trending shows, and browse full anime libraries instantly!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 570,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "tmdb-cta-btn",
                                        onClick: ()=>setCurrentTab("settings"),
                                        children: "Connect API Key"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 573,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 567,
                                columnNumber: 15
                            }, this),
                            trendingMovies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "home-shelf",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "shelf-title",
                                        children: "🌟 Trending Movies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 582,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "horizontal-scroll",
                                        children: trendingMovies.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                video: v,
                                                onSelectVideo: (video)=>{
                                                    setActiveVideo(video);
                                                    setResumeOptions({});
                                                }
                                            }, `${v.type}-${v.id}`, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 585,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 583,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 581,
                                columnNumber: 15
                            }, this),
                            trendingTVShows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "home-shelf",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "shelf-title",
                                        children: "📺 Popular TV Shows"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 601,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "horizontal-scroll",
                                        children: trendingTVShows.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                video: v,
                                                onSelectVideo: (video)=>{
                                                    setActiveVideo(video);
                                                    setResumeOptions({});
                                                }
                                            }, `${v.type}-${v.id}`, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 604,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 602,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 600,
                                columnNumber: 15
                            }, this),
                            trendingAnime.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "home-shelf",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "shelf-title",
                                        children: "🌸 Trending Japanese Anime"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 620,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "horizontal-scroll",
                                        children: trendingAnime.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                video: v,
                                                onSelectVideo: (video)=>{
                                                    setActiveVideo(video);
                                                    setResumeOptions({});
                                                }
                                            }, `${v.type}-${v.id}`, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 623,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 621,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 619,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this),
                    currentTab === "videos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tab-section active",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "explore-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "explore-title",
                                        children: searchQuery.trim() ? `Search Results for "${searchQuery}"` : "Explore curated catalog"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "category-nav",
                                        children: categoriesList.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `category-pill ${currentCategory === cat ? "active" : ""}`,
                                                onClick: ()=>setCurrentCategory(cat),
                                                children: cat
                                            }, cat, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 647,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 645,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 641,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-grid",
                                children: getExploreList().length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        gridColumn: "1/-1",
                                        textAlign: "center",
                                        padding: "60px 20px",
                                        color: "var(--text-muted)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "3rem",
                                                display: "block",
                                                marginBottom: "12px"
                                            },
                                            children: "🔍"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 661,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "1rem"
                                            },
                                            children: "No results found in this category. Try a different query."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 662,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 660,
                                    columnNumber: 17
                                }, this) : getExploreList().map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        video: v,
                                        onSelectVideo: (video)=>{
                                            setActiveVideo(video);
                                            setResumeOptions({});
                                        }
                                    }, `${v.type}-${v.id}`, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 666,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 658,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 640,
                        columnNumber: 11
                    }, this),
                    currentTab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        siteId: siteId,
                        setSiteId: setSiteId,
                        tmdbApiKey: tmdbApiKey,
                        setTmdbApiKey: setTmdbApiKey,
                        onSave: handleSaveSettings,
                        onQuickPlay: handleQuickPlay
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 682,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            activeVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                video: activeVideo,
                resumeOptions: resumeOptions,
                onClose: ()=>{
                    setActiveVideo(null);
                    setResumeOptions({});
                },
                onPlay: handlePlayNow,
                tmdbApiKey: tmdbApiKey
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 695,
                columnNumber: 9
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast-notification",
                children: toast
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 709,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "app-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "© 2026 VidkingStream. Curated anime streaming portal powered by Vidking Embed."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 715,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 714,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
_s(Home, "+oQ/NwQlJYNPCeE/ulLPuP5dsMI=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0m9hmyu._.js.map