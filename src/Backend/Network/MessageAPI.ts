import {
  PlanetMessageResponse,
  PlanetMessageRequest,
  PostMessageRequest,
  DeleteMessagesRequest,
  SignedMessage,
} from '@darkforest_eth/types';

const MESSAGE_API_HOST = process.env.CONVERSATION_API_HOST as string;

export async function getMessagesOnPlanets(
  request: PlanetMessageRequest
): Promise<PlanetMessageResponse> {
  try {
    const response = await fetch(`${MESSAGE_API_HOST}/messages`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
      method: 'POST',
    });
    const responseBody = (await response.json()) as PlanetMessageResponse;
    if (response.status === 500) {
      throw new Error('failed to load messages');
    }
    return responseBody;
  } catch (e) {
    throw e;
  }
}

export async function addMessage(
  request: SignedMessage<PostMessageRequest<unknown>>
): Promise<void> {
  try {
    const res = await fetch(`${MESSAGE_API_HOST}/add-message`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
      method: 'POST',
    });

    if (res.status === 500) {
      throw new Error('server error');
    }
  } catch (e) {
    console.log('failed to add message', request);
    console.log(e);
  }
}

export async function deleteMessages(request: SignedMessage<DeleteMessagesRequest>): Promise<void> {
  try {
    const res = await fetch(`${MESSAGE_API_HOST}/delete-messages`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
      method: 'POST',
    });

    if (res.status === 500) {
      throw new Error('server error');
    }
  } catch (e) {
    console.log('failed delete messages', request);
    console.log(e);
  }
}
