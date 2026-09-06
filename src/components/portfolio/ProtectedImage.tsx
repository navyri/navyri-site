"use client";

import Image, { type ImageProps } from "next/image";

type ProtectedImageProps = ImageProps;

export default function ProtectedImage({
    alt,
    onContextMenu,
    onDragStart,
    src,
    ...props
}: ProtectedImageProps) {
    const isGif = typeof src === "string" && src.toLowerCase().endsWith(".gif");

    return (
        <Image
            {...props}
            src={src}
            alt={alt}
            draggable={false}
            unoptimized={isGif}
            onContextMenu={(event) => {
                event.preventDefault();
                onContextMenu?.(event);
            }}
            onDragStart={(event) => {
                event.preventDefault();
                onDragStart?.(event);
            }}
        />
    );
}