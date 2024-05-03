import{b as t}from"../../../browser-polyfill-CDoadmtY.js";t.runtime.onInstalled.addListener(()=>{console.log("Extension installed")});t.runtime.onMessage.addListener((e,n,s)=>{if(e.action==="fetchResponse")return o(e.tweet).then(a=>{s({response:a})}),!0});async function o(e){return(await(await fetch("http://localhost:11434/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stream:!1,model:"llama3:8b",messages:[{role:"system",content:`You are an AI assistant that generates engaging responses to social media posts. Based on the tweet you receive, you should generate a response that is engaging and relevant.

Guidelines:
- use under 280 chars
- use two phrases max
- be engaging and relevant
- use one or two emojis max
- all lowercase
- don't be cringe
- don't be rude
- don't use hashtags`},{role:"user",content:e}]})})).json()).message.content}
