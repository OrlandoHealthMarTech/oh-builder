import { Button, Card } from '@jhs129/cms-components';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <Head>
        <title>Website 2 - Orlando Health</title>
        <meta name="description" content="Orlando Health Website 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Website 2</h1>

        <div className="max-w-4xl mx-auto">
          <Card title="ExtJS Integration" className="mb-6">
            <p className="mb-4">
              This website demonstrates how to integrate ExtJS with React in a modern web
              application.
            </p>
            <Button variant="primary">Explore Features</Button>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Feature 1">
              <p>Shared components across multiple websites</p>
            </Card>

            <Card title="Feature 2">
              <p>TypeScript integration for better development</p>
            </Card>

            <Card title="Feature 3">
              <p>Tailwind CSS for rapid UI development</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
