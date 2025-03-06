import { Button, Card } from '@orlandohealth/cms-components';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <Head>
        <title>Website 1 - Orlando Health</title>
        <meta name="description" content="Orlando Health Website 1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Website 1</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card title="About ExtJS">
            <p className="mb-4">
              ExtJS is a JavaScript framework for building interactive web applications using
              techniques such as Ajax, DHTML, and DOM scripting.
            </p>
            <Button variant="primary">Learn More</Button>
          </Card>

          <Card title="Our Components">
            <p className="mb-4">
              These components are shared across multiple websites using our custom package.
            </p>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="outline" size="lg">
                Large
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
