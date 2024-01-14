"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"
import "./Breadcrumb.css";

export default function Breadcrumb(props) {
  const { labels } = props;
  const path = usePathname();
  const segments = path.split("/").slice(1).map((segment) => Number.parseInt(segment) ? "[id]" : segment );
  const allSegments = "/" + segments.join("/");

  return (
    <ul className="breadcrumb">
      {segments.map((_, i, arr) => {
        const segmentPath = "/" + segments.slice(0, i + 1).join("/");
        return (
          <li key={i} className="breadcrumb__item">
            {i < arr.length - 1
              ? <Link href={segmentPath}>{labels[segmentPath]}</Link>
              : <span>{labels[allSegments] ?? "undefined"}</span>
            }
          </li>
        )
      })}
    </ul>
  )
}
