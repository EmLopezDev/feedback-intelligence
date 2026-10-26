export default function Home() {
    return (
        <main className="p-8">
            <div className="flex flex-col gap-4 p-5 bg-surface border border-border rounded-xl">
                <h1 className="text-xl font-semibold">Feedback Intelligence</h1>
                <p className="text-muted">Tokens are working.</p>
                <span className="self-start px-3 py-1 text-xs font-semibold rounded-full bg-negative-bg text-negative-fg">
                    ✕ Negative
                </span>
            </div>
        </main>
    );
}
