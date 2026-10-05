"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Database, Download, Play, Table2 } from "lucide-react";
import { miniSqlDemo } from "@/constants/mini-sql-demo";
import { ButtonLink } from "@/components/ui/button-link";

type QueryId = (typeof miniSqlDemo.queries)[number]["id"];

export default function MiniSqlDemoPage() {
  const [selectedId, setSelectedId] = useState<QueryId>("bmi-over-30");
  const selectedQuery = miniSqlDemo.queries.find((query) => query.id === selectedId) ?? miniSqlDemo.queries[0];
  const columns = useMemo(() => {
    const firstRow = selectedQuery.rows[0];
    return firstRow ? Object.keys(firstRow) : [];
  }, [selectedQuery]);

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <Link href="/projects/mini-sql-engine-health-data" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted transition hover:text-accent">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to project
        </Link>

        <section className="grid gap-8 py-10 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div>
            <div className="flex size-12 items-center justify-center rounded-md border border-line bg-white/5 text-accent">
              <Database className="size-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Browser Demo</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">Mini SQL Engine Playground</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              Explore sample outputs from the Python SQL engine using the real health indicators dataset included in the project archive. This browser version mirrors the project&apos;s core SELECT, WHERE, GROUP BY, and aggregation workflows for recruiters who want a quick demo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/downloads/mini-sql-engine-source.zip" variant="secondary">
                <Download className="size-4" aria-hidden="true" />
                Source Zip
              </ButtonLink>
              <ButtonLink href="/downloads/mini-sql-engine-with-data.zip" variant="secondary">
                <Download className="size-4" aria-hidden="true" />
                Source + Data
              </ButtonLink>
            </div>
          </div>

          <aside className="rounded-lg border border-line bg-panel/70 p-5 shadow-glow">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">Dataset</h2>
            <dl className="mt-5 grid gap-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Rows</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">{miniSqlDemo.rowCount.toLocaleString()}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">Columns</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">{miniSqlDemo.columnCount}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="grid gap-5 lg:grid-cols-[18rem_1fr]">
          <div className="rounded-lg border border-line bg-panel/70 p-3">
            <h2 className="px-2 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted">Example Queries</h2>
            <div className="mt-2 space-y-2">
              {miniSqlDemo.queries.map((query) => (
                <button
                  key={query.id}
                  type="button"
                  onClick={() => setSelectedId(query.id)}
                  className={`focus-ring flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-sm transition ${
                    selectedQuery.id === query.id ? "bg-accent text-ink" : "text-muted hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Play className="size-4 shrink-0" aria-hidden="true" />
                  <span className="font-medium">{query.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-panel/70 shadow-glow">
            <div className="border-b border-line p-5">
              <div className="flex items-center gap-3">
                <Table2 className="size-5 text-accent" aria-hidden="true" />
                <h2 className="text-lg font-semibold text-white">{selectedQuery.label}</h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{selectedQuery.description}</p>
              <pre className="mt-4 overflow-x-auto rounded-md border border-line bg-ink/80 p-4 text-sm leading-6 text-accent">
                <code>{selectedQuery.sql}</code>
              </pre>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[42rem] text-left text-sm">
                <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.14em] text-muted">
                  <tr>
                    {columns.map((column) => (
                      <th key={column} scope="col" className="px-4 py-3 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {selectedQuery.rows.map((row, index) => (
                    <tr key={`${selectedQuery.id}-${index}`} className="text-steel">
                      {columns.map((column) => (
                        <td key={column} className="px-4 py-3">
                          {String(row[column as keyof typeof row])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
