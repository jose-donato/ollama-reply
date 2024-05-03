import{b as t}from"../../../browser-polyfill-CDoadmtY.js";const o="llama3:8b",r=`You are an AI assistant that generates engaging responses to social media posts. Based on the tweet you receive, you must generate a response that is engaging and relevant.

Guidelines:
- use under 280 chars
- use two phrases max
- be engaging and relevant
- use one or two emojis max
- be friendly and respectful
- don't use hashtags`;t.runtime.onInstalled.addListener(()=>{console.log("Extension installed")});t.runtime.onMessage.addListener((e,n,s)=>{if(e.action==="fetchResponse")return i(e.tweet).then(a=>{s({response:a})}),!0});async function i(e){return(await(await fetch("http://localhost:11434/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stream:!1,model:o,messages:[{role:"system",content:r},{role:"user",content:e}]})})).json()).message.content}
