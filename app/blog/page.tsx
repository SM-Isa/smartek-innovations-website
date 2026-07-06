export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-20 text-center px-4">
      <div className="text-6xl mb-6">📝</div>
      <h1 className="text-4xl font-bold mb-4">Smartek Blog</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
        Articles, updates, and case studies about smart institutional management across Africa.
      </p>
      <div className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
        Coming Soon
      </div>
    </div>
  );
}
