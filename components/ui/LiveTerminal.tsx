"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const commands = [
    { prompt: "$ pondasi · php artisan serve", result: "✓ Laravel 10 + Vue 3 + Inertia.js running", delay: 0 },
    { prompt: "$ mqtt · mosquitto_sub -t timbangan", result: "✓ PLC/HMI bridge · WebSocket broadcast", delay: 450 },
    { prompt: "$ accurate · oauth2 sync", result: "✓ 2-way · idempotency guard · queue jobs", delay: 900 },
    { prompt: "$ deploy.sh · docker-compose up", result: "✓ Multi-VM · Nginx · zero downtime", delay: 1350 },
];

export default function LiveTerminal() {
    const [visibleLines, setVisibleLines] = useState(0);
    const [typedChars, setTypedChars] = useState<number[]>([]);

    // Types on mount (not scroll-gated) so the terminal is never an empty box.
    useEffect(() => {
        const timeoutIds: ReturnType<typeof setTimeout>[] = [];
        const intervalIds: ReturnType<typeof setInterval>[] = [];

        commands.forEach((cmd, i) => {
            // Start typing prompt
            const timeoutId = setTimeout(() => {
                setVisibleLines(i + 1);
                let charIndex = 0;
                const typeInterval = setInterval(() => {
                    charIndex++;
                    setTypedChars((prev) => {
                        const newArr = [...prev];
                        newArr[i] = charIndex;
                        return newArr;
                    });
                    if (charIndex >= cmd.prompt.length) {
                        clearInterval(typeInterval);
                    }
                }, 18);
                intervalIds.push(typeInterval);
            }, cmd.delay);
            timeoutIds.push(timeoutId);
        });

        return () => {
            timeoutIds.forEach(clearTimeout);
            intervalIds.forEach(clearInterval);
        };
    }, []);

    return (
        <div className="neo-card bg-ink text-cream p-5 md:p-6 font-mono text-xs md:text-sm relative overflow-hidden reveal-up">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cream/10">
                <div className="w-2.5 h-2.5 bg-hotpink" />
                <div className="w-2.5 h-2.5 bg-acid" />
                <div className="w-2.5 h-2.5 bg-electric" />
                <span className="ml-2 text-cream/70 text-xs uppercase tracking-widest">roofi@pondasi</span>
            </div>

            {/* Lines */}
            <div className="space-y-2">
                {commands.slice(0, visibleLines).map((cmd, i) => {
                    const chars = typedChars[i] || 0;
                    const promptText = cmd.prompt.slice(0, chars);
                    const isComplete = chars >= cmd.prompt.length;

                    return (
                        <div key={i}>
                            <div className="flex items-start gap-0">
                                <span className="text-acid font-bold select-none">{promptText}</span>
                                {!isComplete && (
                                    <span className="inline-block w-2 h-4 bg-acid animate-blink ml-0.5" />
                                )}
                            </div>
                            {isComplete && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="text-cream/50 mt-0.5 pl-2"
                                >
                                    {cmd.result}
                                </motion.div>
                            )}
                        </div>
                    );
                })}

                {/* Blinking cursor at end */}
                {visibleLines >= commands.length && (typedChars[commands.length - 1] || 0) >= commands[commands.length - 1].prompt.length && (
                    <div className="flex items-center gap-1 mt-2">
                        <span className="text-acid">$</span>
                        <span className="inline-block w-2 h-4 bg-acid animate-blink" />
                    </div>
                )}
            </div>
        </div>
    );
}
