export function createHandler(handler: (body: any) => Promise<Response>) {
  return async (req: Request) => {
    try {
      if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
      const body = (await req.json()) || {};
      return handler(body);
    } catch (e: any) {
      return new Response('Bad request: ' + e.message, { status: 400 });
    }
  };
}

export async function getD1() {
  throw new Error('D1 credentials are not configured in this build.');
}

export async function getKV() {
  throw new Error('KV credentials are not configured in this build.');
}
