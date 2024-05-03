import browser from "webextension-polyfill";

const MODEL = "llama3:8b";

const SYSTEM_PROMPT = `You are an AI assistant that generates engaging responses to social media posts. Based on the tweet you receive, you must generate a response that is engaging and relevant.

Guidelines:
- don't use more than 2 sentences
- be engaging and relevant
- use one or two emojis max
- be friendly and respectful
- don't use hashtags`;

browser.runtime.onInstalled.addListener(() => {
	console.log("Extension installed");
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "fetchResponse") {
		fetchResponse(request.tweet).then((response) => {
			sendResponse({ response: response });
		});
		return true; // Indicates asynchronous response
	}
});

async function fetchResponse(tweet: string): Promise<string> {
	const response = await fetch("http://localhost:11434/api/chat", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			stream: false,
			model: MODEL,
			messages: [
				{
					role: "system",
					content: SYSTEM_PROMPT,
				},
				{ role: "user", content: tweet },
			],
		}),
	});
	const data = await response.json();
	return data.message.content;
}
