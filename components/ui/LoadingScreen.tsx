"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const LOAD_DURATION = 2200; // ms for 0 -> 100%
const HOLD_AFTER_LOAD = 400; // ms hold at 100%
const SPLIT_DURATION = 900; // ms for split + zoom reveal

export default function LoadingScreen() {
    // Render the cover from the first server render so the home page never
    // paints behind it before the client effect has a chance to run.
    const [show, setShow] = useState(true);
    const [splitting, setSplitting] = useState(false);
    const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    // Animated progress 0 -> 100
    const progress = useMotionValue(0);
    const percent = useTransform(progress, (v) => Math.round(v));
    const barWidth = useTransform(progress, (v) => `${v}%`);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("portfolio-loaded");
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (hasVisited || reducedMotion) {
            setShow(false);
            // Make sure no leftover body classes from a previous session
            document.body.classList.remove("is-loading", "is-loading-split");
            return;
        }

        setSplitting(false);
        setShow(true);
        // Scale the page content up while covered; it will zoom back to 1 on split.
        document.body.classList.add("is-loading");
        document.body.classList.remove("is-loading-split");

        // Animate progress bar 0 -> 100
        const controls = animate(progress, 100, {
            duration: LOAD_DURATION / 1000,
            ease: [0.33, 1, 0.68, 1],
        });

        const splitTimer = setTimeout(() => {
            setSplitting(true);
            // Trigger the zoom-in by removing the scale class.
            document.body.classList.add("is-loading-split");
        }, LOAD_DURATION + HOLD_AFTER_LOAD);

        const doneTimer = setTimeout(() => {
            setShow(false);
            document.body.classList.remove("is-loading", "is-loading-split");
            sessionStorage.setItem("portfolio-loaded", "true");
        }, LOAD_DURATION + HOLD_AFTER_LOAD + SPLIT_DURATION + 180);
        timersRef.current = [splitTimer, doneTimer];

        return () => {
            controls.stop();
            timersRef.current.forEach(clearTimeout);
            timersRef.current = [];
            document.body.classList.remove("is-loading", "is-loading-split");
        };
    }, [progress]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[500] pointer-events-none" aria-hidden="true">
            {/* Top half — slides up on split */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1/2 bg-ink overflow-hidden"
                animate={splitting ? { y: "-100%" } : { y: 0 }}
                transition={{ duration: SPLIT_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
            >
                <LoaderContent anchor="top" percent={percent} barWidth={barWidth} />
            </motion.div>

            {/* Bottom half — slides down on split */}
            <motion.div
                className="fixed bottom-0 left-0 right-0 h-1/2 bg-ink overflow-hidden"
                animate={splitting ? { y: "100%" } : { y: 0 }}
                transition={{ duration: SPLIT_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
            >
                <LoaderContent anchor="bottom" percent={percent} barWidth={barWidth} />
            </motion.div>
        </div>
    );
}

function LoaderContent({
    anchor,
    percent,
    barWidth,
}: {
    anchor: "top" | "bottom";
    percent: ReturnType<typeof useTransform<number, number>>;
    barWidth: ReturnType<typeof useTransform<number, string>>;
}) {
    return (
        <div
            className="absolute left-0 right-0 flex flex-col items-center justify-center"
            style={anchor === "top" ? { top: 0, height: "100vh" } : { bottom: 0, height: "100vh" }}
        >
            {/* Percentage counter */}
            <motion.div className="font-mono text-cream text-5xl md:text-7xl font-bold tabular-nums tracking-tighter">
                <motion.span>{percent}</motion.span>
                <span className="text-acid">%</span>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-6 w-56 md:w-72 h-[3px] bg-cream/15 overflow-hidden">
                <motion.div className="h-full bg-acid" style={{ width: barWidth }} />
            </div>

            {/* Subtle label */}
            <div className="mt-4 font-mono text-[10px] md:text-xs font-bold text-cream/30 uppercase tracking-[0.3em]">
                Loading
            </div>
        </div>
    );
}
