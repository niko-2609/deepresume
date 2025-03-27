import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Forward the request to our Go backend
    const response = await fetch('http://localhost:8080/api/v1/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || 'Failed to generate resume', details: errorData.details },
        { status: response.status }
      );
    }

    // Create a new streaming response
    const stream = new ReadableStream({
      async start(controller) {
        // Stream response from the backend
        const reader = response.body?.getReader();
        if (!reader) {
          controller.error(new Error('No reader available'));
          return;
        }

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            // Forward the chunk to the client
            controller.enqueue(value);
          }
        } catch (error) {
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    // Return the streaming response
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error generating resume:', error);
    return NextResponse.json(
      { error: 'Failed to generate resume' },
      { status: 500 }
    );
  }
} 