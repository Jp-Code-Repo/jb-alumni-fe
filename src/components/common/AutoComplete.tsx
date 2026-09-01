import * as React from "react";

import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";

import {
    Popover,
    PopoverAnchor,
    PopoverContent,
} from "@/components/ui/popover";

import { ScrollArea } from "@/components/ui/scroll-area";

export interface AutocompleteOption {
    id: string;
    label: string;
}

interface AutocompleteProps {
    value: string;
    options: AutocompleteOption[];
    loading?: boolean;
    placeholder?: string;
    onChange(value: string): void;
    onSelect(option: AutocompleteOption): void;
    onClear?(): void;
}

export function Autocomplete({
    value,
    options,
    loading = false,
    placeholder = "Search...",
    onChange,
    onSelect,
    onClear,
}: AutocompleteProps) {
    const [open, setOpen] = React.useState(false);
    const [highlightedIndex, setHighlightedIndex] = React.useState(-1);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const itemRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

    React.useEffect(() => {
        if (!open) return;

        if (options.length === 0) {
            setHighlightedIndex(-1);
            return;
        }

        setHighlightedIndex(0);
    }, [options, open]);

    React.useEffect(() => {
        if (highlightedIndex < 0) return;

        itemRefs.current[highlightedIndex]?.scrollIntoView({
            block: "nearest",
            behavior: "smooth",
        });
    }, [highlightedIndex]);

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (!open) return;

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();

                setHighlightedIndex((prev) =>
                    Math.min(prev + 1, options.length - 1)
                );
                break;

            case "ArrowUp":
                e.preventDefault();

                setHighlightedIndex((prev) =>
                    Math.max(prev - 1, 0)
                );
                break;

            case "Enter":
                e.preventDefault();

                if (
                    highlightedIndex >= 0 &&
                    highlightedIndex < options.length
                ) {
                    onSelect(options[highlightedIndex]);
                    setOpen(false);

                    requestAnimationFrame(() => {
                        inputRef.current?.focus();
                    });
                }

                break;

            case "Escape":
                e.preventDefault();
                setOpen(false);
                break;
        }
    };

    return (
        <Popover
            open={open}
            onOpenChange={setOpen}
        >
            <PopoverAnchor asChild>
                <div className="relative w-full">
                    <Input
                        ref={inputRef}
                        value={value}
                        placeholder={placeholder}
                        autoComplete="off"
                        className="pr-10"
                        onFocus={() => setOpen(true)}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => {
                            onChange(e.target.value);
                            setOpen(true);
                        }}
                    />

                    {value.length > 0 && (
                        <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                                onChange("");
                                onClear?.();

                                setOpen(false);
                                setHighlightedIndex(-1);

                                requestAnimationFrame(() => {
                                    inputRef.current?.focus();
                                });
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-accent"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>
            </PopoverAnchor>

            <PopoverContent
                align="start"
                sideOffset={4}
                onOpenAutoFocus={(e) => e.preventDefault()}
                className="w-[--radix-popover-trigger-width] p-1"
            >
                {loading ? (
                    <div className="p-3 text-sm text-muted-foreground">
                        Loading...
                    </div>
                ) : options.length === 0 ? (
                    <div className="p-3 text-sm text-muted-foreground">
                        No results found.
                    </div>
                ) : (
                    <ScrollArea className="h-64 w-full">
                        <div className="space-y-1 pr-1">
                            {options.map((option, index) => (
                                <button
                                    key={option.id}
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    type="button"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onMouseEnter={() =>
                                        setHighlightedIndex(index)
                                    }
                                    onClick={() => {
                                        onSelect(option);
                                        setOpen(false);

                                        requestAnimationFrame(() => {
                                            inputRef.current?.focus();
                                        });
                                    }}
                                    className={cn(
                                        "flex w-full items-center rounded-md px-3 py-2 text-left text-sm transition-colors",
                                        highlightedIndex === index
                                            ? "bg-accent text-accent-foreground"
                                            : "hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            highlightedIndex === index
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />

                                    <span>{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </ScrollArea>
                )}
            </PopoverContent>
        </Popover>
    );
}